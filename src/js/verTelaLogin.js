
// Cria o switch para lembrar a senha
const rememberSwitch = document.createElement("label");
rememberSwitch.innerHTML = `
  <input type="checkbox" id="rememberPasswordSwitch">
  <span>Lembrar senha</span>
`;
rememberSwitch.style.display = "block";
rememberSwitch.style.marginTop = "10px";

// Adiciona o switch ao formulário de login
const loginForm = document.querySelector(".logon > form:nth-child(2)");
if (loginForm) {
  loginForm.appendChild(rememberSwitch);

  // Recupera o estado do switch do cache
  const isRememberEnabled = localStorage.getItem("rememberPassword") === "true";
  document.getElementById("rememberPasswordSwitch").checked = isRememberEnabled;

  // Adiciona um listener para salvar o estado no cache
  document.getElementById("rememberPasswordSwitch").addEventListener("change", (event) => {
    localStorage.setItem("rememberPassword", event.target.checked);
  });

  // Se o switch estiver ativado, clica automaticamente no botão de login
  if (isRememberEnabled) {
    document.querySelector(".logon > form:nth-child(2) > table:nth-child(6) > tfoot:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)").click();
  }
}
