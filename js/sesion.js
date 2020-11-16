window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    formulario.elements.fullName.focus();
    console.log(formulario);
    formulario.addEventListener('submit', function(evento){
        console.log(evento);
        if(!validaciones()){
            evento.preventDefault();
        }else{
            formulario.submit();
        }
    })

    //funciones controladoras de mi formulario
    //let fullName = document.getElementById('fullName');
    //console.log(fullName.value);
    //let email = document.getElementById('email');
    //function validaciones(){
      //  if(!validacionFullName(fullName) ) return false;
        //if(!validacionEmail(email)) return false;
        /* Aquí
        van 
        todos los llamados a nuestras funciones de validaciones*/
        //return true; 
    //}

    //Funciones de validaciones de cada uno de mis campos
    function validacionFullName(fullName){
        let errorFullName = document.getElementById('errorFullName');
        console.log(errorFullName);
        if(fullName.value == ""){
            errorFullName.innerHTML = 'El campo nombre no lo puede dejar en blanco';
            errorFullName.classList.add('alert-danger');
            fullName.classList.add('is-invalid');
            return false;
        }else{
            errorFullName.innerHTML = "";
            errorFullName.classList.remove('alert-danger');
            fullName.classList.remove('is-invalid');
            fullName.classList.add('is-valid');
            formulario.elements.email.focus();
            return true;
        }
    }

    //Función para validar el email
    function validacionEmail(email){

    }


})