import * as fs from 'fs';
import * as path from 'path';
import AdmZip from 'adm-zip';

interface Manifest {
  id: string;
  name: string;
  description: string;
  instructions: string;
  skills: string[];
  templates: string[];
}

const SKILLS_DIR = path.join(__dirname, '../skills');
const PLATFORMS_DIR = path.join(__dirname, '../platforms');
const OUTPUT_DIR = path.join(__dirname, '../public/bundles');

async function build() {
  console.log('Starting bundle generation...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const practiceAreas = fs.readdirSync(SKILLS_DIR).filter(f => 
    fs.statSync(path.join(SKILLS_DIR, f)).isDirectory()
  );

  const index: any[] = [];

  for (const area of practiceAreas) {
    const areaDir = path.join(SKILLS_DIR, area);
    const manifestPath = path.join(areaDir, 'manifest.json');
    
    if (!fs.existsSync(manifestPath)) continue;

    const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    console.log(`Processing practice area: ${manifest.name}`);

    const baseInstructions = fs.readFileSync(path.join(areaDir, manifest.instructions), 'utf8');

    // Generate bundles for each platform
    const platforms = ['claude', 'chatgpt', 'gemini'];
    const areaBundles: any = { id: manifest.id, name: manifest.name, description: manifest.description, platforms: {} };

    for (const platform of platforms) {
      const zip = new AdmZip();
      const platformDir = path.join(PLATFORMS_DIR, platform);
      
      // 1. Add README-FIRST.md with placeholders replaced
      const readmePath = path.join(platformDir, 'README-FIRST.md');
      let readmeContent = fs.readFileSync(readmePath, 'utf8');
      readmeContent = readmeContent
        .replace(/{{practice_area}}/g, manifest.name)
        .replace(/{{manifest_id}}/g, manifest.id);
      zip.addFile('README-FIRST.md', Buffer.from(readmeContent));

      // 2. Add Instructions
      const wrapperPath = path.join(platformDir, 'instructions-wrapper.md');
      const wrapperTemplate = fs.readFileSync(wrapperPath, 'utf8');
      const finalInstructions = wrapperTemplate.replace('{{base_instructions}}', baseInstructions);
      
      let instructionFileName = 'instructions.md';
      if (platform === 'chatgpt') instructionFileName = 'PROJECT_INSTRUCTIONS.md';
      if (platform === 'gemini') instructionFileName = 'NOTEBOOK_INSTRUCTIONS.md';
      
      zip.addFile(instructionFileName, Buffer.from(finalInstructions));

      // 3. Add Skills and Templates (Platform Specific)
      if (platform === 'claude') {
        // Claude: Separate files in knowledge-base/
        manifest.skills.forEach(skillRelPath => {
          const skillPath = path.join(areaDir, skillRelPath);
          zip.addLocalFile(skillPath, 'knowledge-base');
        });
        manifest.templates.forEach(templateRelPath => {
          const templatePath = path.join(areaDir, templateRelPath);
          zip.addLocalFile(templatePath, 'knowledge-base');
        });
      } else {
        // ChatGPT/Gemini: Consolidated skills
        let consolidatedSkills = `# ${manifest.name} Skills\n\n`;
        manifest.skills.forEach(skillRelPath => {
          const skillContent = fs.readFileSync(path.join(areaDir, skillRelPath), 'utf8');
          consolidatedSkills += `${skillContent}\n\n---\n\n`;
        });
        zip.addFile(`${manifest.id}-skills.md`, Buffer.from(consolidatedSkills));

        // Templates stay separate but in root
        manifest.templates.forEach(templateRelPath => {
          const templatePath = path.join(areaDir, templateRelPath);
          zip.addLocalFile(templatePath);
        });
      }

      // 4. Save ZIP
      const platformOutputDir = path.join(OUTPUT_DIR, platform);
      if (!fs.existsSync(platformOutputDir)) fs.mkdirSync(platformOutputDir, { recursive: true });
      
      const zipFileName = `${manifest.id}.zip`;
      const zipPath = path.join(platformOutputDir, zipFileName);
      zip.writeZip(zipPath);

      // Validation: Ensure ZIP is not empty and contains README-FIRST.md
      const zipCheck = new AdmZip(zipPath);
      if (zipCheck.getEntries().length === 0) {
        throw new Error(`Generated ZIP is empty: ${zipPath}`);
      }
      if (!zipCheck.getEntry('README-FIRST.md')) {
        throw new Error(`Generated ZIP is missing README-FIRST.md: ${zipPath}`);
      }
      if (!zipCheck.getEntry(instructionFileName)) {
        throw new Error(`Generated ZIP is missing instruction file ${instructionFileName}: ${zipPath}`);
      }

      areaBundles.platforms[platform] = {
        downloadPath: `bundles/${platform}/${zipFileName}`
      };
    }

    index.push(areaBundles);
  }

  // Write index.json
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), JSON.stringify(index, null, 2));
  console.log('Bundle generation complete. index.json updated.');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
