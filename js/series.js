window.addEventListener('load', function(){
    let seriesPopulares = document.querySelector('.seriesPopulares');
    let cadaSeriePopular = document.querySelector('.cadaSeriePopular');
    let aclamadasPor = document.querySelector('.aclamadasPor');
    let cadaAgregada = document.querySelector('.cadaAgregada');
    let cadaTitulo = document.querySelector('.cadaTitulo');

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(seriesPopulares){
        console.log(seriesPopulares)

        seriesPopulares.results.forEach(popular => {  
            cadaSeriePopular.innerHTML += `<article class="adetalle">
                                        <a href='detalleSeries.html?id=${popular.id}'>
                                            <div>
                                                 <img src="https://image.tmdb.org/t/p/w500${popular.poster_path}" alt="${popular.name}" class="fotoDePopus"/>
                                                <h2 class="cadaTitulo">${popular.name}</h2>
                                            </div>
                                        </a></article>
                                    `
        });
    })
    .catch(function(error){
        console.log(error)
    })

    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(seriesAclamadas){
        console.log(seriesAclamadas)

        seriesAclamadas.results.forEach(aclamada => {  
            aclamadasPor.innerHTML += `<article class="adetalle2">
                                        <a href='detalleSeries.html?id=${aclamada.id}'>
                                            <div>
                                                 <img src="https://image.tmdb.org/t/p/w500${aclamada.poster_path}" alt="${aclamada.name}" class="fotoDeAcla"/>
                                                <h2 class="cadaTitulo">${aclamada.name}</h2>
                                            </div>
                                        </a></article>
                                    `
        });
    })
    .catch(function(error){
        console.log(error)
    })

    fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(agregadas){
        console.log(agregadas)

        agregadas.results.forEach(agregada => {  
            cadaAgregada.innerHTML += `<article class="adetalle3">
                                        <a href='detalleSeries.html?id=${agregada.id}'>
                                            <div>
                                                 <img src="https://image.tmdb.org/t/p/w500${agregada.poster_path}" alt="${agregada.name}" class="fotoDeAgre"/>
                                                <h2 class="cadaTitulo">${agregada.name}</h2>
                                            </div>
                                        </a></article>
                                    `
        });
    })
    .catch(function(error){
        console.log(error)
    })



    






})