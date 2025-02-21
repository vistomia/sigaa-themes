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

//loadTheme();

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
console.log("Current page URL:", currentPageUrl);

const divs = document.querySelectorAll('div');

for (let div of divs) {
    if (div.innerText === "Não Definido") {
        div.style = "display: none";
        console.log(div)
    }
}

if (currentPageUrl == "https://si3.ufc.br/sigaa/paginaInicial.do") {
    document.querySelector("#menu_principal > div:nth-child(1)").style = "display: none";
    document.querySelector("#menu_principal").style = "display: flex; flex-direction: column; align-items: center";
}