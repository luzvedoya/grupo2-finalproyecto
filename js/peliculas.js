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

        peliculas.results.forEach(populares => {  
            cadaPeli.innerHTML += `<a href='detallePelis.html?id=${populares.id}&titulo=${populares.title}&overview=${populares.overview}&popularity=${populares.popularity}&portada=${populares.poster_path}&fecha=${populares.release_date}&duracion=${populares.runtime}&votos=${populares.vote_average}'
                                    <div>
                                    <img src="https://image.tmdb.org/t/p/w500${populares.poster_path}" alt="${populares.title}"/>
                                    <h2 class="cadaTitulo">${populares.title}</h2>
                                    </div>
                                    </a>`
        });
    })
    .catch(function(error){
        console.log(error)
    })







})