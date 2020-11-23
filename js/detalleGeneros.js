window.addEventListener('load',function(){
   
    //GENEROS
    //VARIABLES DEL HTML Y QUERY STRING
    let cadaGenerop =  document.querySelector('.cadaGenerop')
    let cadaGeneros =  document.querySelector('.cadaGeneros')
    

    let detalleGenero = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
    let id = detalleGeneroObjeto.get('id');
    let name = detalleGeneroObjeto.get('name');
    
    //let name =detalleGeneroObjeto.get('name');

    let gpelis = document.querySelector ('.gpelis')
    gpelis.innerHTML = `<h2 class="movies">${name} Movies </h2>`;

    fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=f9762d5338820badb13e8cc378cef322&language=en-US&with_genres=${id}`)

    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(generos){
        //console.log(generos);
        generos.results.forEach(genero => {
            cadaGenerop.innerHTML += 
            `<a href='detallePelis.html?id=${genero.id}&titulo=${genero.title}&overview=${genero.overview}&popularity=${genero.popularity}&portada=${genero.poster_path}&fecha=${genero.release_date}&duracion=${genero.runtime}&votos=${genero.vote_average}&genero=${genero.genre_ids}'
                                    <div>
                                        <article class= "cadaUno"><img src="https://image.tmdb.org/t/p/w500${genero.poster_path}" alt="${genero.title}"/>
                                        <h2 class="cadaTitulo">${genero.title}</h2></article>
                                    </div>
                                    </a>`

            //`<div class="cadaUno">
            //<img src="https://image.tmdb.org/t/p/w500${genero.poster_path}" />
            //<h2 class="gtitulo">${genero.title}</h2>
            //</div>`

        });

        

    
    })
    .catch(function(error){
        console.log(error)
    })

    let gseries = document.querySelector ('.gseries')
    gseries.innerHTML = `<h2 class="series">${name} Series </h2>`;
    
    
    fetch(`
    https://api.themoviedb.org/3/discover/tv?api_key=f9762d5338820badb13e8cc378cef322&language=en-US&with_genres=${id}`)

    .then(function(respuesta){
        return respuesta.json()

    })
    .then(function(generos){
        //console.log(generos);
        generos.results.forEach(genero => {
            cadaGeneros.innerHTML += 
            `<a href='detalleSeries.html?id=${genero.id}&titulo=${genero.title}&overview=${genero.overview}&popularity=${genero.popularity}&portada=${genero.poster_path}&fecha=${genero.release_date}&duracion=${genero.runtime}&votos=${genero.vote_average}&genero=${genero.genre_ids}'
                                    <div>
                                        <article class= "cadaUno"><img src="https://image.tmdb.org/t/p/w500${genero.poster_path}" alt="${genero.title}"/>
                                        <h2 class="cadaTitulo">${genero.title}</h2></article>
                                    </div>
                                    </a>`

            //`<div class="cadaUno">
            //<img src="https://image.tmdb.org/t/p/w500${genero.poster_path}" />
            //<h2 class="gtitulo">${genero.title}</h2>
            //</div>`

        });

        

    
    })
    .catch(function(error){
        console.log(error)
    })


})

