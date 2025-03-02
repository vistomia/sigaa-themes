const ligado = document.getElementById('ligado');
const desligado = document.getElementById('desligado');

async function change_theme(x) {
    browser.storage.local.set({ theme: x });
    await browser.storage.local.get('theme');
    browser.tabs.executeScript({ file: '../theme.js' });
}

ligado.addEventListener('click', async () => {
    await change_theme('ligado');
});

desligado.addEventListener('click', async () => {
    await change_theme('desligado');
});
