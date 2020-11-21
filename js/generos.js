window.addEventListener('load', function(){
   
   //HEADER
   
   
    let clickmenu = document.querySelector('.clickmenu');
    let hopciones = document.querySelector('.hopciones');
    let hopcioncitas = document.getElementById('hopcioncitas')
    let hopcioncitas1 = document.getElementById('hopcioncitas1')
    let hopcioncitas2 = document.getElementById('hopcioncitas2')
    let hopcioncitas3 = document.getElementById('hopcioncitas3')
    const menuham = document.querySelector('.menuham')
            hamenu = document.querySelector('#hamenu')
    menuham.addEventListener('click', function(){
        //clickmenu.style.display = 'block'
        clickmenu.classList.toggle('clickmenujs')   
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
    hopcioncitas4.addEventListener('mouseover', function(){
        hopcioncitas4.style.textDecoration = 'underline'
    })
    hopcioncitas4.addEventListener('mouseout', function(){
        hopcioncitas4.style.textDecoration = 'none'
    })
   

    //GENEROS


    let listaGeneros = document.querySelector ('.listaGeneros');
    let genero = document.querySelector ('.genero');
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f9762d5338820badb13e8cc378cef322&language=en-US')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(generos){
        console.log(generos);
        generos.genres.forEach(genero => {
            listaGeneros.innerHTML += 
            `<a href="detalleGeneros.html?id= ${genero.id}&name=${genero.name}">
                    <article class="todos">
                        <h2 class="palabra"> ${genero.name} </h2>
                    </article>
            </a>` 
          
        });
        
    })
    .catch(function(error){
        console.log(error)
    })

})