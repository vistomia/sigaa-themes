const claro = document.getElementById('claro');
const escuro = document.getElementById('escuro');
const reset = document.getElementById('reset');

async function change_theme(x) {
    browser.storage.local.set({ theme: x });
    await browser.storage.local.get('theme');
    browser.tabs.executeScript({ file: '../theme.js' });
}

claro.addEventListener('click', async () => {
    await change_theme('claro');
});

escuro.addEventListener('click', async () => {
    await change_theme('escuro');
});

reset.addEventListener('click', async () => {
    await change_theme('escuro');
});
