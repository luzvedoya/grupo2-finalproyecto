window.addEventListener('load', function(){
    let series = document.querySelector('.series');
    let cadaSerie = document.querySelector('.cadaSerie')
    let cadaTitulo = document.querySelector('.cadaTitulo');

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(series){
        //console.log(series)

        series.results.forEach(serie => {  
            cadaSerie.innerHTML += `<div>
                                    <h2 class="cadaTitulo">${serie.name}</h2>
                                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}"/>
                                    </div>`
        });
    })
    .catch(function(error){
        console.log(error)
    })







})