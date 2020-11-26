window.addEventListener('load', function(){
 
 
 let bienvenida= document.querySelector('.bienvenida')
    let datos = location.search;
    let datosObjeto = new URLSearchParams('datos');
    datosObjeto.get('nombre');

    bienvenida.innerHTML = `Bienvenid@ ${datosObjeto.get('nombre')}`
    


})