window.addEventListener('load', function(){
    let peliculasPopulares = document.querySelector('.peliculasPopulares');
    let cadaPeliPopu = document.querySelector('.cadaPeliPopu');
    let cadaTitulo = document.querySelector('.cadaTitulo');
    let aclamadasPublico = document.querySelector('.aclamadasPublico');
    let aclamadasPor = document.querySelector ('.aclamadasPor');
    let proximamente = document.querySelector ('.proximamente');
    let proxima = document.querySelector ('.proxima');


    //NECESITO TRAER LAS REVIEWS
    /*fetch('https://api.themoviedb.org/3/review/{review_id}?api_key=18581b65b3e6ad002984aa4952878117')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(resenia){
        console.log(resenia);
    })
    .catch(function(error){
        console.log(error)
    })*/


    fetch('https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(peliculasPopulares){
        console.log(peliculasPopulares)

        peliculasPopulares.results.forEach(populares => {  
            cadaPeliPopu.innerHTML += `<article class="adetalle"><a href='detallePelis.html?id=${populares.id}'
                                    <div class="saco">
                                        <img src="https://image.tmdb.org/t/p/w500${populares.poster_path}" alt="${populares.title}" class="fotoDePopus"/>
                                        <h2 class="cadaTitulo">${populares.title}</h2>
                                    </div>
                                    </a></article>`
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
            aclamadasPor.innerHTML += `<article class="adetalle2"><a href='detallePelis.html?id=${aclamadas.id}'
                                    <div>
                                    <img src="https://image.tmdb.org/t/p/w500${aclamadas.poster_path}" alt="${aclamadas.title}" class="fotoDeAcla"/>
                                    <h2 class="cadaTitulo">${aclamadas.title}</h2>
                                    </div>
                                    </a></article>`
        });
    })
    .catch(function(error){
        console.log(error)

    })

    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(proximamente){
        console.log(proximamente)

        proximamente.results.forEach(prox => {  
            proxima.innerHTML += `<article class="adetalle3">
                                    <a href='detallePelis.html?id=${prox.id}'
                                        <div>
                                            <img src="https://image.tmdb.org/t/p/w500${prox.poster_path}" alt="${prox.title}" class="fotoDeProx"/>
                                            <h2 class="cadaTitulo">${prox.title}</h2>
                                        </div>
                                    </a>
                                </article>`
        });
    })
    .catch(function(error){
        console.log(error)

    })

    



})