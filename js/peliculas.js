window.addEventListener('load', function(){
    let peliculasPopulares = document.querySelector('.peliculasPopulares');
    let cadaPeliPopu = document.querySelector('.cadaPeliPopu');
    let cadaTitulo = document.querySelector('.cadaTitulo');
    let aclamadasPublico = document.querySelector('.aclamadasPublico');
    let aclamadasPor = document.querySelector ('.aclamadasPor');


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


    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(aclamadasPublico){
        console.log(aclamadasPublico)

        aclamadasPublico.results.forEach(aclamadas => {  
            aclamadasPor.innerHTML += `<a href='detallePelis.html?id=${aclamadas.id}&titulo=${aclamadas.title}&overview=${aclamadas.overview}&popularity=${aclamadas.popularity}&portada=${aclamadas.poster_path}&fecha=${aclamadas.release_date}&duracion=${aclamadas.runtime}&votos=${aclamadas.vote_average}'
                                    <div>
                                    <img src="https://image.tmdb.org/t/p/w500${aclamadas.poster_path}" alt="${aclamadas.title}"/>
                                    <h2 class="cadaTitulo">${aclamadas.title}</h2>
                                    </div>
                                    </a>`
        });
    })
    .catch(function(error){
        console.log(error)

    })



})