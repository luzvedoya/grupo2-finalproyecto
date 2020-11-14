window.addEventListener('load', function(){
    let peliculasPopulares = document.querySelector('.peliculasPopulares');
    let cadaPeliPopu = document.querySelector('.cadaPeliPopu')
    let cadaTitulo = document.querySelector('.cadaTitulo');
    let cadaPeliAgregada = document.querySelector('.cadaPeliAgregada');

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(peliculasPopulares){
        console.log(peliculasPopulares)

        peliculasPopulares.results.forEach(populares => {  
            cadaPeliPopu.innerHTML += `<a href='detallePelis.html?id=${populares.id}&titulo=${populares.title}&overview=${populares.overview}&popularity=${populares.popularity}&portada=${populares.poster_path}&fecha=${populares.release_date}&duracion=${populares.runtime}&votos=${populares.vote_average}'
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