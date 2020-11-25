window.addEventListener('load', function(){

let nombre = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("password")
let form = document.getElementById("form")
let avisando = document.getElementById("aviso")

form.addEventListener("submit", enviar=>{
    enviar.preventDefault()
    let aviso = ""
    let entrar = false
    let elEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    avisando.innerHTML = ""
    if(nombre.value.length <8){
        aviso += `El nombre es invalido <br>`
        entrar = true
    }
    if(!elEmail.test(email.value)){
        aviso += `El email es invalido <br>`
        entrar = true
    }
    if(pass.value.length < 9){
        aviso += `La contraseña es invalida <br>`
        entrar = true
    }

    if(entrar){
        avisando.innerHTML = aviso
    }else{
        avisando.innerHTML = "Enviado"
    }
})

})