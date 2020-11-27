window.addEventListener('load', function(){
  
//Guardo el formulario con sus elementos
  let fomulario = document.querySelector('.form');
  formulario.elements.name.focus();
  console.log(formulario);
  
 
//Función para que se ejecute una vez que el usuario envie ó de enter en cada input
  formulario.onsubmit = function(evento) {
    //Evito que por defecto se envie el formulario
    //Si el formulario pasa las validaciones doy el ingreso al usuario
    if (!validateRegisterForm()) {
      evento.preventDefault()
    }else{
      fomulario.submit()
    }
 
}
//Esta es la función que valida todos los campos del formulario
function validateRegisterForm() {
  let {name, email, password} = formulario.elements

  
  if (!validateName(name)) return false;
  if (!validateEmail(email)) return false;
  if (!validatePassword(password)) return false;
  return true;
  }
 
  function validateName(name) {
    let errorn = document.getElementById('avison');
    
    if (name.value.length < 5){
      errorn.innerHTML = "It must have more than 5 characters";
      return false;
    
    } else{
      avison.innerHTML = ""; //Si es mayor a 5 digitos, no hay texto
      formulario.elements.email.focus(); //Entonces pasa el focus a email
      return true;
    }
}
 
  function validateEmail(email) {
    let er = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let errore = document.getElementById('avisoe');
    
    if (!er.test(email.value)){ 
      errore.innerHTML= "You must write a valid email";
    return false

  }else{
    errore.innerHTML= "";
    formulario.elements.password.focus()
    return true;
  }
  }
 
  function validatePassword(password) {
    let rep = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    let errorp = document.getElementById('avisop');
 
    if (!rep.test(password.value)) {
      errorp.innerHTML = `You must write a valid password`;
      return false;  
 
    }else{
      errorp.innerHTML = "";
      return true;
    }

   
  }
  
})