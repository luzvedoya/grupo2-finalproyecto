window.addEventListener('load', function(){
    let peliculas = document.querySelector('.peliculas');
    let cadaPeli = document.querySelector('.cadaPeli')
    let cadaTitulo = document.querySelector('.cadaTitulo');

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(peliculas){
        console.log(peliculas)

        peliculas.results.forEach(peli => {  
            cadaPeli.innerHTML += `<div>
                                    <h2 class="cadaTitulo">${peli.title}</h2>
                                    <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}"/>
                                    </div>`
        });
    })
    .catch(function(error){
        console.log(error)
    })







})