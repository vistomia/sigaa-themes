window.addEventListener('DOMContentLoaded', async () => {
    document.querySelector("#info-sistema > span:nth-child(1) > h1:nth-child(1)").innerText = "UFC - SIGAA"
    const color = await browser.storage.local.get('theme');
    console.log(color.theme);

    if (color.theme === "desligado") return

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

    const menuUsuario = document.querySelector("#menu-usuario > ul");
    if (menuUsuario) {
        const newListItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.textContent = "Avaliação Institucional";
        newLink.href = "https://si3.ufc.br/sigaa/verPortalAvaliacao.do";
        newListItem.appendChild(newLink);
        menuUsuario.appendChild(newListItem);
    }
});

