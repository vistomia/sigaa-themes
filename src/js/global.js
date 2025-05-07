

window.addEventListener('DOMContentLoaded', async () => {
    const color = await browser.storage.local.get('theme');
    console.log(color.theme);

    if (color.theme === "desligado") return

    document.querySelector("#info-sistema > span:nth-child(1) > h1:nth-child(1)").innerText = "UFC - SIGAA"
    const divs = document.querySelectorAll('div');

    const textsToHide = [
        "Não Definido",
        "Portal do Discente",
        "ATENÇÃO!\n\nO sistema diferencia letras maiúsculas de minúsculas APENAS na senha, portanto ela deve ser digitada da mesma maneira que no cadastro."
    ];

    for (let i = 0; i < divs.length; i++) {
        const content = divs[i].innerText.trim();
        textsToHide.forEach(text => {
            if (content === text.trim()) {
                divs[i].style.display = "none";
            }
        });
    }
});
