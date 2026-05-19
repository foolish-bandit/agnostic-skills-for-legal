import * as fs from 'fs';
import * as path from 'path';

const SKILLS_DIR = path.join(__dirname, '../skills');

function validate() {
  console.log('Validating manifests...');
  
  const practiceAreas = fs.readdirSync(SKILLS_DIR).filter(f => 
    fs.statSync(path.join(SKILLS_DIR, f)).isDirectory()
  );

  let errorCount = 0;

  practiceAreas.forEach(area => {
    const areaDir = path.join(SKILLS_DIR, area);
    const manifestPath = path.join(areaDir, 'manifest.json');
    
    if (!fs.existsSync(manifestPath)) {
      console.error(`Error: Missing manifest.json in ${area}`);
      errorCount++;
      return;
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    // Check instructions
    if (!fs.existsSync(path.join(areaDir, manifest.instructions))) {
      console.error(`Error: Referenced instruction file "${manifest.instructions}" not found in ${area}`);
      errorCount++;
    }

    // Check skills
    manifest.skills.forEach((skillPath: string) => {
      if (!fs.existsSync(path.join(areaDir, skillPath))) {
        console.error(`Error: Referenced skill file "${skillPath}" not found in ${area}`);
        errorCount++;
      }
    });

    // Check templates
    manifest.templates.forEach((templatePath: string) => {
      if (!fs.existsSync(path.join(areaDir, templatePath))) {
        console.error(`Error: Referenced template file "${templatePath}" not found in ${area}`);
        errorCount++;
      }
    });
  });

  if (errorCount > 0) {
    console.error(`Validation failed with ${errorCount} errors.`);
    process.exit(1);
  } else {
    console.log('All manifests validated successfully.');
  }
}

validate();
