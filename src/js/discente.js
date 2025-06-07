document.querySelector(".perfil").innerText = ""

// Transforma o texto Calendário Universitário em um link para os dados pessoais
let calendario_universitario_text = document.querySelector("#perfil-docente > p:nth-child(4) > a:nth-child(1)")

calendario_universitario_text.innerText = "Meus Dados Pessoais"
calendario_universitario_text.href = "#"
calendario_universitario_text.setAttribute('onclick', "if(typeof jsfcljs == 'function'){jsfcljs(document.forms['j_id_jsp_440181972_143'],'j_id_jsp_440181972_143:meusDadosPessoais,j_id_jsp_440181972_143:meusDadosPessoais','');}return false")

// Cria o container para o docente para que os links funcionem corretamente
const docente = document.createElement('div');
docente.id = 'container-docente';

const perfilDocente = document.createElement('div');
const perfil = document.querySelector('#perfil-docente');

docente.appendChild(perfil);

const portalDocente = document.getElementById('portal-docente');
portalDocente.appendChild(docente);

// Cria um link, a partir da foto do perfil, para a página de alteração da foto do discente
document.getElementsByClassName('foto')[0].addEventListener('click', function () {
    window.location.href = 'perfil.jsf';
});

document.querySelector(".sair-sistema").addEventListener('click', function() {
    localStorage.setItem("rememberPassword", false);
})

docente.appendChild(createLink('Moodle UFC', 'https://moodle2.quixada.ufc.br/login/index.php'));
docente.appendChild(createLink('Calendário Universitário', 'http://www.ufc.br/alunos-2/calendario-universitario-alunos'))
docente.appendChild(createLink('Inserir Créditos no RU', 'https://si3.ufc.br/public//jsp/restaurante_universitario/consulta_comensal_ru.jsf'));
docente.appendChild(createLink('Cardápio RU', 'https://www.ufc.br/restaurante/cardapio/5-restaurante-universitario-de-quixada/2025-03-12'));
docente.appendChild(createLink("Itinerário dos Ônibus", "https://www.quixada.ufc.br/itinerario-dos-onibus/"));
docente.appendChild(createLink('Meu Pergamum', 'https://pergamum.ufc.br/pergamum/biblioteca_s/php/login_usu.php'));
docente.appendChild(createLink('Minha Biblioteca', 'https://dliportal.zbra.com.br/Login.aspx?key=UFC'));
docente.appendChild(createLink('Biblioteca Universitária', 'https://si3.ufc.br/sigrh/public/biblioteca_universitaria.jsf'));

function createLink(text, url) {
    const div = document.createElement('div');
    let link = document.createElement('a');
    link.textContent = text;
    link.target="_blank";
    link.href = url;
    div.appendChild(link)
    return div
}