const PLATFORM_LABELS = {
    claude: 'Claude Projects',
    chatgpt: 'ChatGPT Projects',
    gemini: 'Gemini Notebooks'
};

const PRACTICE_AREA_ORDER = [
    'commercial-legal',
    'corporate-legal',
    'privacy',
    'product-legal',
    'employment',
    'litigation',
    'regulatory-legal',
    'ip-legal',
    'ai-governance'
];

const ZIP_CONTENTS = {
    claude: [
        '<code>instructions.md</code>',
        '<code>knowledge-base/</code> (separate skill and template files)',
        '<code>README-FIRST.md</code>'
    ],
    chatgpt: [
        '<code>PROJECT_INSTRUCTIONS.md</code>',
        'Consolidated practice-area skills file',
        '<code>README-FIRST.md</code>'
    ],
    gemini: [
        '<code>NOTEBOOK_INSTRUCTIONS.md</code>',
        '<code>knowledge-base/</code> (separate skill and template files)',
        '<code>README-FIRST.md</code>'
    ]
};

const SETUP_STEPS = {
    claude: [
        'Download the ZIP and unzip it.',
        'In Claude, create a new Project.',
        'Open <code>instructions.md</code> and paste it into the Project’s custom instructions.',
        'Upload the files in <code>knowledge-base/</code> to the Project’s knowledge.',
        'Start a chat with the starter prompt above (also in <code>README-FIRST.md</code>).'
    ],
    chatgpt: [
        'Download the ZIP and unzip it.',
        'In ChatGPT, create a new Project.',
        'Open <code>PROJECT_INSTRUCTIONS.md</code> and paste it into the Project’s instructions.',
        'Upload the consolidated skills file (and any templates) to the Project’s files.',
        'Start a chat with the starter prompt above (also in <code>README-FIRST.md</code>).'
    ],
    gemini: [
        'Download the ZIP and unzip it.',
        'In NotebookLM, create a new notebook.',
        'Add <code>NOTEBOOK_INSTRUCTIONS.md</code> and every file in <code>knowledge-base/</code> as sources.',
        'Start with the starter prompt above (also in <code>README-FIRST.md</code>).'
    ]
};

let bundleIndex = [];
let selectedPlatform = null;
let selectedAreaId = null;

let promptsLoaded = false;
const promptTextCache = new Map();

async function init() {
    wireViewToggle();

    try {
        const response = await fetch('bundles/index.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('Index fetch failed: ' + response.status);
        bundleIndex = await response.json();
    } catch (err) {
        console.error(err);
        showError('Bundle catalog could not be loaded. Please check that <code>public/bundles/index.json</code> exists and run <code>npm run build</code>.');
        return;
    }

    wirePlatformCards();
    wireResetLink();
    wireCopyButton();
}

function wireViewToggle() {
    const pillBundles = document.getElementById('pill-bundles');
    const pillPrompts = document.getElementById('pill-prompts');
    const viewBundles = document.getElementById('view-bundles');
    const viewPrompts = document.getElementById('view-prompts');

    function show(view) {
        const isBundles = view === 'bundles';
        viewBundles.classList.toggle('hidden', !isBundles);
        viewPrompts.classList.toggle('hidden', isBundles);
        pillBundles.classList.toggle('active', isBundles);
        pillPrompts.classList.toggle('active', !isBundles);
        pillBundles.setAttribute('aria-selected', String(isBundles));
        pillPrompts.setAttribute('aria-selected', String(!isBundles));

        if (!isBundles && !promptsLoaded) {
            loadPrompts();
        }
    }

    pillBundles.addEventListener('click', () => show('bundles'));
    pillPrompts.addEventListener('click', () => show('prompts'));
}

function wirePlatformCards() {
    document.querySelectorAll('.platform-card').forEach(card => {
        card.addEventListener('click', () => selectPlatform(card.dataset.platform));
    });
}

function wireResetLink() {
    document.getElementById('reset-link').addEventListener('click', (e) => {
        e.preventDefault();
        resetSelection();
    });
}

function wireCopyButton() {
    const btn = document.getElementById('copy-prompt');
    btn.addEventListener('click', async () => {
        const text = document.getElementById('example-prompt').textContent;
        try {
            await navigator.clipboard.writeText(text);
            btn.textContent = 'Copied';
            setTimeout(() => { btn.textContent = 'Copy prompt'; }, 1500);
        } catch (err) {
            console.error(err);
            btn.textContent = 'Copy failed';
            setTimeout(() => { btn.textContent = 'Copy prompt'; }, 1500);
        }
    });
}

function selectPlatform(platform) {
    selectedPlatform = platform;

    document.querySelectorAll('.platform-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.platform === platform);
    });

    renderAreas();
    document.getElementById('step-area').classList.remove('hidden');

    // Keep the practice area selection only if it's still available for this platform.
    if (selectedAreaId && !findArea(selectedAreaId)) {
        selectedAreaId = null;
    }

    if (selectedAreaId) {
        renderDownload();
        document.getElementById('step-download').classList.remove('hidden');
        highlightAreaCard(selectedAreaId);
    } else {
        document.getElementById('step-download').classList.add('hidden');
    }

    document.getElementById('step-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectArea(areaId) {
    selectedAreaId = areaId;
    highlightAreaCard(areaId);
    renderDownload();
    document.getElementById('step-download').classList.remove('hidden');
    document.getElementById('step-download').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderAreas() {
    const container = document.getElementById('area-cards');
    container.innerHTML = '';

    const orderedAreas = orderedBundleIndex().filter(area => area.platforms[selectedPlatform]);

    orderedAreas.forEach(area => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'card area-card';
        card.dataset.areaId = area.id;
        card.innerHTML = `
            <h3>${escapeHtml(area.name)}</h3>
            <p>${escapeHtml(area.description || '')}</p>
            <span class="tag">ZIP available</span>
        `;
        card.addEventListener('click', () => selectArea(area.id));
        container.appendChild(card);
    });
}

function highlightAreaCard(areaId) {
    document.querySelectorAll('.area-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.areaId === areaId);
    });
}

function renderDownload() {
    const area = findArea(selectedAreaId);
    if (!area || !selectedPlatform) return;

    const platformData = area.platforms[selectedPlatform];

    document.getElementById('summary-platform').textContent = PLATFORM_LABELS[selectedPlatform];
    document.getElementById('summary-area').textContent = area.name;

    const btn = document.getElementById('download-btn');
    btn.href = platformData.downloadPath;
    btn.textContent = `Download ${area.name} for ${PLATFORM_LABELS[selectedPlatform]}`;

    const promptBlock = document.getElementById('prompt-block');
    if (area.examplePrompt) {
        document.getElementById('example-prompt').textContent = area.examplePrompt;
        promptBlock.classList.remove('hidden');
    } else {
        promptBlock.classList.add('hidden');
    }

    document.getElementById('zip-contents').innerHTML = ZIP_CONTENTS[selectedPlatform]
        .map(item => `<li>${item}</li>`)
        .join('');

    document.getElementById('setup-steps').innerHTML = SETUP_STEPS[selectedPlatform]
        .map(step => `<li>${step}</li>`)
        .join('');
}

function resetSelection() {
    selectedPlatform = null;
    selectedAreaId = null;
    document.querySelectorAll('.card.selected').forEach(c => c.classList.remove('selected'));
    document.getElementById('step-area').classList.add('hidden');
    document.getElementById('step-download').classList.add('hidden');
    document.getElementById('area-cards').innerHTML = '';
    document.getElementById('step-platform').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function orderedBundleIndex() {
    const byId = new Map(bundleIndex.map(a => [a.id, a]));
    const ordered = PRACTICE_AREA_ORDER.map(id => byId.get(id)).filter(Boolean);
    // Append any bundles not in the explicit order list, alphabetically.
    const extras = bundleIndex
        .filter(a => !PRACTICE_AREA_ORDER.includes(a.id))
        .sort((a, b) => a.name.localeCompare(b.name));
    return [...ordered, ...extras];
}

function findArea(areaId) {
    const area = bundleIndex.find(a => a.id === areaId);
    if (!area) return null;
    if (selectedPlatform && !area.platforms[selectedPlatform]) return null;
    return area;
}

function showError(messageHtml) {
    const banner = document.getElementById('error-banner');
    banner.innerHTML = messageHtml;
    banner.classList.remove('hidden');
    document.querySelectorAll('.step-section').forEach(s => s.classList.add('hidden'));
    document.querySelector('.flow').classList.add('hidden');
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/* ===== Individual prompts ===== */

const TASK_TYPES = [
    { id: 'setup', label: 'Set up' },
    { id: 'triage', label: 'Triage' },
    { id: 'review', label: 'Review' },
    { id: 'draft', label: 'Draft' },
    { id: 'track', label: 'Track' }
];

let promptCatalog = [];
let promptSearchText = {};
let searchIndexPromise = null;
const promptFilter = { search: '', area: 'all', type: 'all' };

async function loadPrompts() {
    promptsLoaded = true;
    const container = document.getElementById('prompts-content');
    try {
        const res = await fetch('prompts/index.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error('Prompt index fetch failed: ' + res.status);
        promptCatalog = await res.json();
        if (!Array.isArray(promptCatalog) || promptCatalog.length === 0) {
            container.innerHTML = '<p class="prompts-note">No prompts are available yet. Check back soon.</p>';
            return;
        }
        setupPromptFilters();
        renderFilteredPrompts();
    } catch (err) {
        console.error(err);
        promptsLoaded = false;
        container.innerHTML = '<p class="prompts-note">The prompt catalog could not be loaded. Please try again later.</p>';
    }
}

function setupPromptFilters() {
    const areaChips = document.getElementById('filter-area');
    const typeChips = document.getElementById('filter-type');
    areaChips.innerHTML = '';
    typeChips.innerHTML = '';

    areaChips.appendChild(makeChip('All', 'all', 'area'));
    promptCatalog.forEach(area => areaChips.appendChild(makeChip(area.area, area.areaId, 'area')));

    typeChips.appendChild(makeChip('All', 'all', 'type'));
    TASK_TYPES.forEach(t => typeChips.appendChild(makeChip(t.label, t.id, 'type')));

    const search = document.getElementById('prompt-search');
    search.addEventListener('input', () => {
        promptFilter.search = search.value.trim().toLowerCase();
        if (promptFilter.search) ensureSearchIndex().then(renderFilteredPrompts);
        renderFilteredPrompts();
    });

    document.getElementById('prompt-filters').classList.remove('hidden');
}

function makeChip(label, value, group) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.textContent = label;
    chip.dataset.group = group;
    chip.dataset.value = value;
    const active = promptFilter[group] === value;
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-pressed', String(active));
    chip.addEventListener('click', () => {
        promptFilter[group] = value;
        document.querySelectorAll(`.chip[data-group="${group}"]`).forEach(c => {
            const on = c.dataset.value === value;
            c.classList.toggle('active', on);
            c.setAttribute('aria-pressed', String(on));
        });
        renderFilteredPrompts();
    });
    return chip;
}

function ensureSearchIndex() {
    if (searchIndexPromise) return searchIndexPromise;
    searchIndexPromise = fetch('prompts/search-index.json', { cache: 'no-cache' })
        .then(res => (res.ok ? res.json() : {}))
        .then(data => { promptSearchText = data; })
        .catch(err => { console.error(err); promptSearchText = {}; });
    return searchIndexPromise;
}

function promptMatches(prompt) {
    if (promptFilter.type !== 'all' && prompt.type !== promptFilter.type) return false;
    if (promptFilter.search) {
        const q = promptFilter.search;
        const meta = (prompt.title + ' ' + (prompt.description || '')).toLowerCase();
        const body = promptSearchText[prompt.file] || '';
        if (!meta.includes(q) && !body.includes(q)) return false;
    }
    return true;
}

function renderFilteredPrompts() {
    const container = document.getElementById('prompts-content');
    container.innerHTML = '';

    let shown = 0;
    let total = 0;

    promptCatalog.forEach(area => {
        total += (area.prompts || []).length;
        if (promptFilter.area !== 'all' && area.areaId !== promptFilter.area) return;

        const matching = (area.prompts || []).filter(promptMatches);
        if (matching.length === 0) return;
        shown += matching.length;

        const section = document.createElement('section');
        section.className = 'prompt-area';

        const head = document.createElement('div');
        head.className = 'prompt-area-head';
        head.innerHTML = `<h3>${escapeHtml(area.area)}</h3><p>${escapeHtml(area.blurb || '')}</p>`;
        section.appendChild(head);

        const grid = document.createElement('div');
        grid.className = 'prompts-grid';
        matching.forEach(p => grid.appendChild(buildPromptCard(p)));
        section.appendChild(grid);

        container.appendChild(section);
    });

    const count = document.getElementById('prompts-count');
    if (shown === 0) {
        container.innerHTML = '<p class="prompts-note">No prompts match these filters. Try clearing the search or choosing &ldquo;All&rdquo;.</p>';
        count.textContent = `Showing 0 of ${total} prompts`;
    } else {
        count.textContent = shown === total
            ? `Showing all ${total} prompts`
            : `Showing ${shown} of ${total} prompts`;
    }
}

function buildPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';

    const h4 = document.createElement('h4');
    h4.textContent = prompt.title;

    const desc = document.createElement('p');
    desc.className = 'prompt-desc';
    desc.textContent = prompt.description || '';

    const foot = document.createElement('div');
    foot.className = 'prompt-card-foot';

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy prompt';

    const previewBtn = document.createElement('button');
    previewBtn.type = 'button';
    previewBtn.className = 'ghost-btn';
    previewBtn.textContent = 'Preview';
    previewBtn.setAttribute('aria-expanded', 'false');

    const preview = document.createElement('pre');
    preview.className = 'prompt-preview hidden';

    copyBtn.addEventListener('click', async () => {
        const text = await getPromptText(prompt.file);
        if (text == null) {
            flashButton(copyBtn, 'Copy failed', 'Copy prompt');
            return;
        }
        try {
            await navigator.clipboard.writeText(text);
            flashButton(copyBtn, 'Copied', 'Copy prompt');
        } catch (err) {
            console.error(err);
            flashButton(copyBtn, 'Copy failed', 'Copy prompt');
        }
    });

    previewBtn.addEventListener('click', async () => {
        if (preview.classList.contains('hidden')) {
            if (!preview.dataset.loaded) {
                preview.textContent = 'Loading…';
                const text = await getPromptText(prompt.file);
                preview.textContent = text != null ? text : 'Preview could not be loaded.';
                if (text != null) preview.dataset.loaded = 'true';
            }
            preview.classList.remove('hidden');
            previewBtn.textContent = 'Hide preview';
            previewBtn.setAttribute('aria-expanded', 'true');
        } else {
            preview.classList.add('hidden');
            previewBtn.textContent = 'Preview';
            previewBtn.setAttribute('aria-expanded', 'false');
        }
    });

    const pageLink = document.createElement('a');
    pageLink.className = 'ghost-btn';
    pageLink.href = prompt.file.replace(/\.md$/, '.html');
    pageLink.textContent = 'Open page';

    foot.appendChild(copyBtn);
    foot.appendChild(previewBtn);
    foot.appendChild(pageLink);
    card.appendChild(h4);
    card.appendChild(desc);
    card.appendChild(foot);
    card.appendChild(preview);
    return card;
}

async function getPromptText(file) {
    if (promptTextCache.has(file)) return promptTextCache.get(file);
    try {
        const res = await fetch(file, { cache: 'no-cache' });
        if (!res.ok) throw new Error('Prompt fetch failed: ' + res.status);
        const text = await res.text();
        promptTextCache.set(file, text);
        return text;
    } catch (err) {
        console.error(err);
        return null;
    }
}

function flashButton(btn, flashLabel, restoreLabel) {
    btn.textContent = flashLabel;
    setTimeout(() => { btn.textContent = restoreLabel; }, 1500);
}

init();
