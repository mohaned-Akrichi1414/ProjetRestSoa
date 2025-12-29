// WebContent/assets/js/ui-common.js
function renderNavbar(active) {
    const nav = document.querySelector('.navbar-links');
    if (!nav) return;
    nav.innerHTML = `
        <a href="index.html"${active === 'list' ? ' style="font-weight:bold;"' : ''}>Liste</a>
        <a href="add.html"${active === 'add' ? ' style="font-weight:bold;"' : ''}>Ajouter</a>
        <a href="search.html"${active === 'search' ? ' style="font-weight:bold;"' : ''}>Recherche</a>
    `;
}

function showMessage(container, text, type) {
    container.textContent = text;
    container.className = 'message ' + (type || '');
}
