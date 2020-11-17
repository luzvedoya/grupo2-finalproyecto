window.addEventListener('load', function(){

    //Funciones de validaciones de cada uno de mis campos
    function validacionEmail(email){
        let errorEmail = document.getElementById('errorEmail');
        console.log(errorEmail);
        if(email.value == ""){
            errorEmail.innerHTML = 'No puede dejar en blanco este campo';
            errorEmail.classList.add('alert-danger');
            email.classList.add('is-invalid');
            return false;
        }else{
            errorEmail.innerHTML = "";
            errorEmail.classList.remove('alert-danger');
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            formulario.elements.email.focus();
            return true;
        }
    }

    function validacionContraseña(contraseña){
        let errorContraseña = document.getElementById('errorContraseña');
        console.log(errorContraseña);
        if(contraseña.value == ""){
            errorContraseña.innerHTML = 'No puede dejar en blanco este campo';
            errorContraseña.classList.add('alert-danger');
            email.classList.add('is-invalid');
            return false;
        }else{
            errorEmail.innerHTML = "";
            errorEmail.classList.remove('alert-danger');
            contraseña.classList.remove('is-invalid');
            contraseña.classList.add('is-valid');
            formulario.elements.contraseña.focus();
            return true;
        }
    }


})