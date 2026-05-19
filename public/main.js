let selectedPlatform = null;
let selectedArea = null;
let bundleIndex = [];

async function init() {
    try {
        const response = await fetch('bundles/index.json');
        bundleIndex = await response.json();
        
        setupPlatformSelection();
    } catch (error) {
        console.error('Failed to load bundle index:', error);
    }
}

function setupPlatformSelection() {
    const cards = document.querySelectorAll('.platform-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedPlatform = card.dataset.platform;
            
            showAreaSelection();
        });
    });
}

function showAreaSelection() {
    const areaSelection = document.getElementById('area-selection');
    const areaCards = document.getElementById('area-cards');
    areaCards.innerHTML = '';
    
    bundleIndex.forEach(area => {
        const card = document.createElement('div');
        card.className = 'card area-card';
        card.innerHTML = `
            <h4>${area.name}</h4>
            <p>${area.description}</p>
        `;
        card.addEventListener('click', () => {
            document.querySelectorAll('.area-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedArea = area;
            
            showDownloadSection();
        });
        areaCards.appendChild(card);
    });
    
    areaSelection.classList.remove('hidden');
    document.getElementById('download-section').classList.add('hidden');
    
    // Scroll to area selection
    areaSelection.scrollIntoView({ behavior: 'smooth' });
}

function showDownloadSection() {
    const downloadSection = document.getElementById('download-section');
    const downloadBtn = document.getElementById('download-btn');
    const bundleInfo = document.getElementById('bundle-info');
    
    const platformData = selectedArea.platforms[selectedPlatform];
    downloadBtn.href = platformData.downloadPath;
    
    bundleInfo.textContent = `${selectedArea.name} for ${capitalize(selectedPlatform)}`;
    
    downloadSection.classList.remove('hidden');
    
    // Scroll to download section
    downloadSection.scrollIntoView({ behavior: 'smooth' });
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

init();
