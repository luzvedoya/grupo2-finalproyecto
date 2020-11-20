window.addEventListener('load', function(){
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
            `<a href="GenresDetail.html" + generos>
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