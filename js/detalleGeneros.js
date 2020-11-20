window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let nombreGenero = document.querySelector('.nombreGenero')
    let cadaGenero =  document.querySelector('.cadaGenero')

    let detalleGenero = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
    let id = detalleGeneroObjeto.get('id');
    
    //let name =detalleGeneroObjeto.get('name');
    
    fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=f9762d5338820badb13e8cc378cef322&language=en-US&with_genres=${id}`)

    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(generos){
        //console.log(generos);
        generos.results.forEach(genero => {
            cadaGenero.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${genero.poster_path}" alt="${genero.title}"/>`
        });

       /* generos.results.forEach(genero => {  
            cadaGenero.innerHTML += `<a href='detallePelis.html?id=${genero.id}&titulo=${genero.title}&overview=${genero.overview}&popularity=${genero.popularity}&portada=${genero.poster_path}&fecha=${genero.release_date}&duracion=${genero.runtime}&votos=${genero.vote_average}'
                                    <div>
                                    <img src="https://image.tmdb.org/t/p/w500${genero.poster_path}" alt="${genero.title}"/>
                                    <h2 class="cadaTitulo">${genero.title}</h2>
                                    </div>
                                    </a>`
        });*/
        

    
    })
    .catch(function(error){
        console.log(error)
    })


})