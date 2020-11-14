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

        seriesPopulares.results.forEach(populares => {  
            cadaSeriePopular.innerHTML += `
                                        <a href='detalleSeries.html?id=${populares.id}&nombre=${populares.name}&overview=${populares.overview}&popularity=${populares.popularity}&portada=${populares.poster_path}&fecha=${populares.first_air_date}&votos=${populares.vote_average}&genero=${populares.genre_ids}'>
                                            <div>
                                                 <img src="https://image.tmdb.org/t/p/w500${populares.poster_path}" alt="${populares.name}"/>
                                                <h2 class="cadaTitulo">${populares.name}</h2>
                                            </div>
                                        </a>
                                    `
        });
    })
    .catch(function(error){
        console.log(error)
    })







})