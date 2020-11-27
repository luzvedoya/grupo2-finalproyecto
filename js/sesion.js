window.addEventListener('load', function(){
  

  //Capturo el formulario 
  let formulario = document.querySelector('.form'); 
  formulario.elements.name.focus(); 
  console.log(formulario);
  
 
//Función para cuando el usuario envie ó de enter en cada input
  formulario.onsubmit = function(evento) { 
    if (!validateRegisterForm()) {
      evento.preventDefault() 
    }
 
}
//Función para validar todos los campos del formulario
function validateRegisterForm() {
  let {name, email, password} = formulario.elements

  //Cada campo en específico

  if (!validateName(name)) return false;
  if (!validateEmail(email)) return false;
  if (!validatePassword(password)) return false;
  return true;
  }
 

  //NAME

  function validateName(name) {
    let errorn = document.getElementById('avison');
    
    if (name.value.length < 5){
      errorn.innerHTML = "It must have more than 5 characters";
      return false;
    
    } else{
      errorn.innerHTML = ""; 
      formulario.elements.email.focus(); 
      return true;
    }
}


//EMAIL
 
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


  //PASSWORD
 
  function validatePassword(password) {
    let exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    let errorp = document.getElementById('avisop');
 
    if (!exp.test(password.value)) {
      errorp.innerHTML = `You must write a valid password`;
      return false;  
 
    }else{
      errorp.innerHTML = "";
      return true;
    }

   
  }




  
})