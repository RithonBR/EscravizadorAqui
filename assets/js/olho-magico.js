// Obtém o elemento de input de senha usando o ID "password"
const passwordInput = document.getElementById("password");

// Obtém o elemento de imagem que controla a visibilidade da senha, usando o ID "togglePassword"
const togglePassword = document.getElementById("togglePassword");

// Adiciona um evento de "mousedown" ao botão de ocultar/mostrar senha
togglePassword.addEventListener("mousedown", function(){
    // Altera o tipo do input de senha para 'text', mostrando a senha
    passwordInput.type = "text";
    // Altera a imagem do ícone para o ícone de "mostrar senha"
    togglePassword.src = "/assets/imgs/mostrar.png";
});

// Adiciona um evento de "mouseup" para restaurar o estado de ocultar a senha após o clique
togglePassword.addEventListener("mouseup", function(){
    // Altera o tipo do input de volta para 'password', ocultando a senha
    passwordInput.type = "password";
    // Altera a imagem do ícone para o ícone de "ocultar senha"
    togglePassword.src = "/assets/imgs/ocultar.png";
});

// Adiciona um evento de "mouseleave" caso o mouse saia do botão de controle
togglePassword.addEventListener("mouseleave", function(){
    // Altera o tipo do input para 'password' novamente, caso o mouse saia sem clicar
    passwordInput.type = "password";
    // Altera a imagem do ícone para o ícone de "ocultar senha"
    togglePassword.src = "/assets/imgs/ocultar.png";
});
