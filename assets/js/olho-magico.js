const passwordInput = document.getElementById("password")
const togglePassword = document.getElementById("togglePassword")

togglePassword.addEventListener("mousedown", function(){
    passwordInput.type = "text";
    togglePassword.src = "/assets/imgs/mostrar.png"
})

togglePassword.addEventListener("mouseup", function(){
    passwordInput.type = "password";
    togglePassword.src = "/assets/imgs/ocultar.png"
})

togglePassword.addEventListener("mouseleave",function(){
    passwordInput.type = "password";
    togglePassword.src = "/assets/imgs/ocultar.png"
})