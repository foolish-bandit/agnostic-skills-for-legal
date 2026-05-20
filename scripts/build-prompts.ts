import * as fs from 'fs';
import * as path from 'path';

interface PromptEntry {
  id: string;
  title: string;
  description: string;
}

interface PromptManifest {
  area: string;
  areaId: string;
  blurb: string;
  prompts: PromptEntry[];
}

const PROMPTS_DIR = path.join(__dirname, '../prompts');
const OUTPUT_DIR = path.join(__dirname, '../public/prompts');

function build() {
  console.log('Starting prompt catalog generation...');

  if (!fs.existsSync(PROMPTS_DIR)) {
    console.log('No prompts/ directory found. Skipping prompt catalog.');
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), JSON.stringify([], null, 2));
    return;
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const areas = fs.readdirSync(PROMPTS_DIR).filter(f =>
    fs.statSync(path.join(PROMPTS_DIR, f)).isDirectory()
  );

  const index: any[] = [];
  let errorCount = 0;

  for (const area of areas) {
    const areaDir = path.join(PROMPTS_DIR, area);
    const manifestPath = path.join(areaDir, 'manifest.json');

    if (!fs.existsSync(manifestPath)) {
      console.error(`Error: Missing manifest.json in prompts/${area}`);
      errorCount++;
      continue;
    }

    const manifest: PromptManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    console.log(`Processing prompt area: ${manifest.area} (${manifest.prompts.length} prompts)`);

    const outAreaDir = path.join(OUTPUT_DIR, manifest.areaId);
    fs.mkdirSync(outAreaDir, { recursive: true });

    const areaEntry: any = {
      areaId: manifest.areaId,
      area: manifest.area,
      blurb: manifest.blurb,
      prompts: []
    };

    for (const prompt of manifest.prompts) {
      const srcFile = path.join(areaDir, `${prompt.id}.md`);
      if (!fs.existsSync(srcFile)) {
        console.error(`Error: Missing prompt file "${prompt.id}.md" in prompts/${area}`);
        errorCount++;
        continue;
      }

      fs.copyFileSync(srcFile, path.join(outAreaDir, `${prompt.id}.md`));

      areaEntry.prompts.push({
        id: prompt.id,
        title: prompt.title,
        description: prompt.description,
        file: `prompts/${manifest.areaId}/${prompt.id}.md`
      });
    }

    index.push(areaEntry);
  }

  if (errorCount > 0) {
    console.error(`Prompt catalog generation failed with ${errorCount} errors.`);
    process.exit(1);
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), JSON.stringify(index, null, 2));
  console.log('Prompt catalog generation complete. prompts/index.json updated.');
}

build();
