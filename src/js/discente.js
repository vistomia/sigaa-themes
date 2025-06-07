document.querySelector(".perfil").innerText = ""

let calendario_universitario_text = document.querySelector("#perfil-docente > p:nth-child(4) > a:nth-child(1)")

calendario_universitario_text.innerText = "Meus Dados Pessoais"
calendario_universitario_text.href = "#"

calendario_universitario_text.setAttribute('onclick', "if(typeof jsfcljs == 'function'){jsfcljs(document.forms['j_id_jsp_440181972_143'],'j_id_jsp_440181972_143:meusDadosPessoais,j_id_jsp_440181972_143:meusDadosPessoais','');}return false")

function addLink(text, url) {
    const div = document.createElement('div');
    let link = document.createElement('a');
    link.textContent = text;
    link.target="_blank";
    link.href = url;
    div.appendChild(link)
    return div
}

const docente = document.createElement('div');
docente.id = 'container-docente';

// Cria o elemento que terá o ID #perfil-docente
const perfilDocente = document.createElement('div');
const perfil = document.querySelector('#perfil-docente');

// Adiciona o elemento #perfil-docente dentro da nova div
docente.appendChild(perfil);

// Adiciona a nova div dentro do #portal-docente
const portalDocente = document.getElementById('portal-docente');
portalDocente.appendChild(docente);

// foto 
document.getElementsByClassName('foto')[0].addEventListener('click', function () {
    window.location.href = 'perfil.jsf';
});

document.querySelector(".sair-sistema").addEventListener('click', function() {
    localStorage.setItem("rememberPassword", false);
})

docente.appendChild(addLink('Moodle UFC', 'https://moodle2.quixada.ufc.br/login/index.php'));
docente.appendChild(addLink('Calendário Universitário', 'http://www.ufc.br/alunos-2/calendario-universitario-alunos'))
docente.appendChild(addLink('Inserir Créditos no RU', 'https://si3.ufc.br/public//jsp/restaurante_universitario/consulta_comensal_ru.jsf'));
docente.appendChild(addLink('Cardápio RU', 'https://www.ufc.br/restaurante/cardapio/5-restaurante-universitario-de-quixada/2025-03-12'));
docente.appendChild(addLink("Itinerário dos Ônibus", "https://www.quixada.ufc.br/itinerario-dos-onibus/"));
docente.appendChild(addLink('Meu Pergamum', 'https://pergamum.ufc.br/pergamum/biblioteca_s/php/login_usu.php'));
docente.appendChild(addLink('Minha Biblioteca', 'https://dliportal.zbra.com.br/Login.aspx?key=UFC'));
docente.appendChild(addLink('Biblioteca Universitária', 'https://si3.ufc.br/sigrh/public/biblioteca_universitaria.jsf'));
