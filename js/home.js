window.addEventListener('load',function(){
    let menuham = document.querySelector('.menuham');
    let clickmenu = document.querySelector('.clickmenu');
    let lupa = document.querySelector('.lupa');
    let buscador = document.querySelector('.buscador');

    menuham.addEventListener('click', function(){
        clickmenu.classList.toggle('clickmenu')
    })

    lupa.addEventListener('click', function(){
        buscador.classList.toggle('buscador')
    })










})