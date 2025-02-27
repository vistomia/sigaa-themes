async function loadTheme() {
    const color = await browser.storage.local.get('theme');
    console.log(color.theme)
    if (color.theme === 'claro') {
        loadStringCSS("body { background-color: #fff; }");
    } else {
        loadStringCSS("body { background-color: #000; color: #fff; }");
    }
}

function loadStringCSS(css) {
    const styleId = 'theme-style';
    let style = document.getElementById(styleId);
    if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
    }
    style.textContent = css;
}

async function loadExternalCSS() {
    try {
        const response = await fetch('dark-theme.css');
        if (!response.ok) throw new Error(response.statusText);
        const css = await response.text();
        loadStringCSS(css);
    } catch (error) {
        console.error("Error loading external CSS file:", error);
    }
}

//loadExternalCSS();

const currentPageUrl = window.location.href;

const divs = document.querySelectorAll('div');

const textsToHide = [
    "Não Definido",
    "Portal do Discente",
    "ATENÇÃO!\n\nO sistema diferencia letras maiúsculas de minúsculas APENAS na senha, portanto ela deve ser digitada da mesma maneira que no cadastro."
];



divs.forEach(div => {
    const content = div.textContent.trim();
    textsToHide.forEach(text => {
        if (content === text.trim()) {
            div.style.display = "none";
        }
    });
});

document.querySelector(".perfil").innerText = ""
document.querySelector(".perfil").insertAdjacentHTML('beforeend', `<svg style="height: 10px;width: 10px;" fill="#404E82" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>`);

if (currentPageUrl == "https://si3.ufc.br/sigaa/paginaInicial.do") {
    document.querySelector("#menu_principal > div:nth-child(1)").style = "display: none";
    document.querySelector("#menu_principal").style = "display: flex; flex-direction: column; align-items: center";
}

// use loadStringCSS to load CSS styles theme.css
fetch('thema.css')
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.text();
    })
    .then(css => loadStringCSS(css))
    .catch(error => console.error("Error loading theme.css:", error));

document.querySelector(".foto").href = "perfil.jsf"

if (currentPageUrl === "https://si3.ufc.br/sigaa/verTelaLogin.do") {
    loadStringCSS("");
}

if (currentPageUrl === "https://si3.ufc.br/sigaa/telaAvisoLogon.jsf") {
    loadStringCSS("");
}

if (currentPageUrl === "https://si3.ufc.br/sigaa/paginaInicial.do") {
    
}

let insertingCSS = browser.tabs.insertCSS({ file: "thema.css" })


if (currentPageUrl === "https://si3.ufc.br/sigaa/portais/discente/discente.jsf") {
    loadStringCSS("");
}
