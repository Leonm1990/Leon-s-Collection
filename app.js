document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('hidden');
});

function navigate(section) {
    document.getElementById('content').innerHTML = `<h1>${section}</h1><p>Content for ${section} will appear here...</p>`;
}

function uploadExcel() {
    alert('Excel upload function coming soon!');
}

function openFeedback() {
    alert('Feedback form coming soon!');
}