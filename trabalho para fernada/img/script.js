// script.js
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggleButton.textContent = body.classList.contains('dark-mode') ? 'Ativar Tema Claro' : 'Ativar Tema Escuro';
});