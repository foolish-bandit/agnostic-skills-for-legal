import * as fs from 'fs';
import * as path from 'path';

interface PromptEntry {
  id: string;
  type: string;
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
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'prompts');
const BASE_URL = 'https://agnostic-skills-for-legal.pages.dev';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const LOGO_SVG = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="7" fill="#0b5394"/><g fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="16" y1="9" x2="16" y2="22"/><line x1="11.5" y1="23" x2="20.5" y2="23"/><line x1="8" y1="11.5" x2="24" y2="11.5"/><path d="M5.2 13.5 Q8 17.8 10.8 13.5"/><path d="M21.2 13.5 Q24 17.8 26.8 13.5"/><line x1="8" y1="11.5" x2="8" y2="13.5"/><line x1="24" y1="11.5" x2="24" y2="13.5"/></g><circle cx="16" cy="9" r="1.8" fill="#ffffff"/></svg>';

const PAGE_FOOTER = `<footer>
<p>Drafting and workflow aid only. Not legal advice. Attorney review required.</p>
<p>Bundles and prompts are adapted from Anthropic's open-source <a href="https://github.com/anthropics/claude-for-legal">Claude for Legal</a> skills, used under the Apache-2.0 license.</p>
<p>Not affiliated with Anthropic, OpenAI, Google, or Claude for Legal.</p>
<p class="footer-links"><a href="/">Home</a> <span aria-hidden="true">·</span> <a href="https://github.com/foolish-bandit/agnostic-skills-for-legal">GitHub</a></p>
</footer>`;

function promptPageHtml(area: PromptManifest, prompt: PromptEntry, mdText: string): string {
  const mdHref = `${prompt.id}.md`;
  const title = escapeHtml(prompt.title);
  const areaName = escapeHtml(area.area);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — ${areaName} prompt | Agnostic Skills for Legal</title>
<meta name="description" content="${escapeHtml(prompt.description)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate" type="text/markdown" href="${mdHref}">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<header>
<div class="masthead">
<a href="/" class="logo-link" aria-label="Agnostic Skills for Legal — home"><span class="logo-mark" aria-hidden="true">${LOGO_SVG}</span></a>
<h1>Agnostic Skills for Legal</h1>
</div>
</header>
<main>
<p class="breadcrumb"><a href="/">Home</a> &rsaquo; Individual prompts &rsaquo; ${areaName}</p>
<h2 class="prompt-page-title">${title}</h2>
<p class="prompt-page-desc">${escapeHtml(prompt.description)}</p>
<p class="prompt-page-meta">Practice area: ${areaName} &nbsp;&middot;&nbsp; Task: ${escapeHtml(prompt.type)} &nbsp;&middot;&nbsp; <a href="${mdHref}">Markdown source</a></p>
<div class="prompt-page-actions">
<button type="button" id="copy-btn" class="copy-btn">Copy prompt</button>
</div>
<h3 class="prompt-section-h">Prompt</h3>
<pre class="prompt-full" id="prompt-text">${escapeHtml(mdText)}</pre>
<p class="attribution-note">Adapted from Anthropic's open-source <a href="https://github.com/anthropics/claude-for-legal">Claude for Legal</a> skills, used under the Apache-2.0 license. This is an independent project, not affiliated with Anthropic. Every output is a draft for licensed-attorney review — not legal advice.</p>
</main>
${PAGE_FOOTER}
<script>
(function(){var b=document.getElementById('copy-btn');b.addEventListener('click',function(){navigator.clipboard.writeText(document.getElementById('prompt-text').textContent).then(function(){b.textContent='Copied';},function(){b.textContent='Copy failed';});setTimeout(function(){b.textContent='Copy prompt';},1500);});})();
</script>
</body>
</html>
`;
}

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
  const manifests: PromptManifest[] = [];
  const searchIndex: Record<string, string> = {};
  const bodies: Record<string, string> = {};
  let errorCount = 0;
  let pageCount = 0;

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

      const mdText = fs.readFileSync(srcFile, 'utf8');
      const fileRef = `prompts/${manifest.areaId}/${prompt.id}.md`;

      // Full-text search index: lowercased, whitespace-collapsed prompt body
      searchIndex[fileRef] = mdText.toLowerCase().replace(/\s+/g, ' ').trim();
      bodies[fileRef] = mdText;

      // Raw Markdown (clean, LLM-friendly)
      fs.writeFileSync(path.join(outAreaDir, `${prompt.id}.md`), mdText);

      // Static, self-contained HTML page
      fs.writeFileSync(
        path.join(outAreaDir, `${prompt.id}.html`),
        promptPageHtml(manifest, prompt, mdText)
      );
      pageCount++;

      areaEntry.prompts.push({
        id: prompt.id,
        type: prompt.type || 'other',
        title: prompt.title,
        description: prompt.description,
        file: fileRef
      });
    }

    index.push(areaEntry);
    manifests.push(manifest);
  }

  if (errorCount > 0) {
    console.error(`Prompt catalog generation failed with ${errorCount} errors.`);
    process.exit(1);
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.json'), JSON.stringify(index, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'search-index.json'), JSON.stringify(searchIndex));
  console.log(`Prompt catalog generation complete. ${pageCount} prompt pages, index.json + search-index.json updated.`);

  writeLlmsTxt(manifests);
  writeLlmsFull(manifests, bodies);
  writeSitemap(manifests);
}

function writeLlmsTxt(manifests: PromptManifest[]) {
  const total = manifests.reduce((n, m) => n + m.prompts.length, 0);
  let out = `# Agnostic Skills for Legal\n\n`;
  out += `> Legal AI skills for Claude, ChatGPT, and Gemini. Ready-to-use platform bundles `;
  out += `(Claude Projects, ChatGPT Projects, Gemini Notebooks) for 9 legal practice areas, `;
  out += `plus ${total} standalone copy-paste prompts. Every output is a drafting and workflow `;
  out += `aid for licensed-attorney review — not legal advice. Adapted from Anthropic's `;
  out += `open-source Claude for Legal skills (Apache-2.0); an independent project, not `;
  out += `affiliated with Anthropic.\n\n`;
  out += `For agents: to retrieve the entire catalog in a single request, fetch [llms-full.txt](${BASE_URL}/llms-full.txt) — it inlines the full text of every prompt.\n\n`;
  out += `## Individual prompts\n\n`;
  out += `Each prompt is a standalone workflow. The links below are the raw Markdown — paste one into a fresh AI chat to run it.\n\n`;

  for (const m of manifests) {
    out += `### ${m.area}\n\n`;
    for (const p of m.prompts) {
      out += `- [${p.title}](${BASE_URL}/prompts/${m.areaId}/${p.id}.md): ${p.description}\n`;
    }
    out += `\n`;
  }

  out += `## More\n\n`;
  out += `- [llms-full.txt](${BASE_URL}/llms-full.txt): the full text of every prompt inline, in one file\n`;
  out += `- [Website](${BASE_URL}/): platform bundles and the searchable prompt catalog\n`;
  out += `- [Prompt catalog (JSON)](${BASE_URL}/prompts/index.json)\n`;
  out += `- [Bundle catalog (JSON)](${BASE_URL}/bundles/index.json)\n`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), out);
  console.log('llms.txt written.');
}

function writeLlmsFull(manifests: PromptManifest[], bodies: Record<string, string>) {
  const total = manifests.reduce((n, m) => n + m.prompts.length, 0);
  const areaRule = '═'.repeat(72);
  const promptRule = '─'.repeat(72);

  let out = `# Agnostic Skills for Legal — Full Prompt Catalog\n\n`;
  out += `> Legal AI skills for Claude, ChatGPT, and Gemini. This file inlines the full text `;
  out += `of all ${total} standalone copy-paste prompts across 9 legal practice areas. Every `;
  out += `output is a drafting and workflow aid for licensed-attorney review — not legal `;
  out += `advice. Adapted from Anthropic's open-source Claude for Legal skills (Apache-2.0); `;
  out += `an independent project, not affiliated with Anthropic.\n\n`;
  out += `Each prompt below is a self-contained workflow. To run one, copy everything from its `;
  out += `"You are running ..." opening line through its closing "Then wait for the user's `;
  out += `first reply." line into a fresh AI chat. Canonical per-prompt files are at `;
  out += `${BASE_URL}/prompts/<area>/<id>.md\n\n`;

  for (const m of manifests) {
    out += `${areaRule}\n\n# ${m.area}\n\n`;
    for (const p of m.prompts) {
      const fileRef = `prompts/${m.areaId}/${p.id}.md`;
      out += `${promptRule}\n\n## ${p.title} (${p.type})\n\n`;
      out += `Practice area: ${m.area}. Canonical source: ${BASE_URL}/${fileRef}\n\n`;
      out += `${(bodies[fileRef] || '').trim()}\n\n`;
    }
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), out);
  console.log('llms-full.txt written.');
}

function writeSitemap(manifests: PromptManifest[]) {
  const urls = [`${BASE_URL}/`];
  for (const m of manifests) {
    for (const p of m.prompts) {
      urls.push(`${BASE_URL}/prompts/${m.areaId}/${p.id}.html`);
    }
  }
  const body = urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log(`sitemap.xml written (${urls.length} URLs).`);
}

build();
