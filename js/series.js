window.addEventListener('load', function(){
    let seriesPopulares = document.querySelector('.seriesPopulares');
    let cadaSeriePopular = document.querySelector('.cadaSeriePopular')
    let cadaTitulo = document.querySelector('.cadaTitulo');

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(seriesPopulares){
        console.log(seriesPopulares)

        seriesPopulares.results.forEach(popular => {  
            cadaSeriePopular.innerHTML += `
                                        <a href='detalleSeries.html?id=${popular.id}&titulo=${popular.name}&overview=${popular.overview}&popularity=${popular.popularity}&portada=${popular.poster_path}&fecha=${popular.first_air_date}&votos=${popular.vote_average}&genero=${popular.genre_ids.id}'>
                                            <div>
                                                 <img src="https://image.tmdb.org/t/p/w500${popular.poster_path}" alt="${popular.name}"/>
                                                <h2 class="cadaTitulo">${popular.name}</h2>
                                            </div>
                                        </a>
                                    `
        });
    })
    .catch(function(error){
        console.log(error)
    })


    






})