window.addEventListener('load', function(){
    let menuham = document.querySelector('.menuham');
    let clickmenu = document.querySelector('.clickmenu');
    let hopciones = document.querySelector('.hopciones');
    let hopcioncitas = document.getElementById('hopcioncitas')
    let hopcioncitas1 = document.getElementById('hopcioncitas1')
    let hopcioncitas2 = document.getElementById('hopcioncitas2')
    let hopcioncitas3 = document.getElementById('hopcioncitas3')

    menuham.addEventListener('click', function(){
        clickmenu.classList.toggle('clickmenu')

    })

    hopcioncitas.addEventListener('mouseover', function(){
        hopcioncitas.style.textDecoration = 'underline'
    })
    hopcioncitas.addEventListener('mouseout', function(){
        hopcioncitas.style.textDecoration = 'none'
    })
    hopcioncitas1.addEventListener('mouseover', function(){
        hopcioncitas1.style.textDecoration = 'underline'
    })
    hopcioncitas1.addEventListener('mouseout', function(){
        hopcioncitas1.style.textDecoration = 'none'
    })
    hopcioncitas2.addEventListener('mouseover', function(){
        hopcioncitas2.style.textDecoration = 'underline'
    })
    hopcioncitas2.addEventListener('mouseout', function(){
        hopcioncitas2.style.textDecoration = 'none'
    })
    hopcioncitas3.addEventListener('mouseover', function(){
        hopcioncitas3.style.textDecoration = 'underline'
    })
    hopcioncitas3.addEventListener('mouseout', function(){
        hopcioncitas3.style.textDecoration = 'none'
    })

   

})