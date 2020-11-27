window.addEventListener('load', function(){
   
    let coverfotos = document.querySelector ('#coverfotos')
    let populares = document.querySelector('#populares')
    let valoradas = document.getElementById('valoradas')
    let spopulares = document.getElementById('spopulares')
    let svaloradas = document.getElementById('svaloradas')
    let peliculas = document.querySelector('.peliculas')


    //traemos las peliculas para los carousels
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(peliculasPopulares){
        for(let i = 0 ; i < peliculasPopulares.results.length; i++){
            populares.innerHTML += `<li> 
            <div class="uk-panel"> 
                <a href='detallePelis.html?id=${peliculasPopulares.results[i].id}'
                    <div>
                        <img src="https://image.tmdb.org/t/p/w500${peliculasPopulares.results[i].poster_path}" alt="${peliculasPopulares.results[i].title}"/>
                    </div>
                </a>          
            </div> 
            </li>
            ` 
        }


    })

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(peliculasValoradas){
        for(let i = 0 ; i < peliculasValoradas.results.length; i++){
            valoradas.innerHTML += `<li> 
            <div class="uk-panel"> 
                <a href='detallePelis.html?id=${peliculasValoradas.results[i].id}'
                    <div>
                        <img src="https://image.tmdb.org/t/p/w500${peliculasValoradas.results[i].poster_path}" alt="${peliculasValoradas.results[i].title}"/>
                    </div>
                </a>
             </div> </li> `
        }

    })
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(seriesPopulares){
        for(let i = 0 ; i < seriesPopulares.results.length; i++){
            spopulares.innerHTML += `<li> 
            <div class="uk-panel">
                <a href='detalleSeries.html?id=${seriesPopulares.results[i].id}'>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w500${seriesPopulares.results[i].poster_path}" alt="${seriesPopulares.results[i].name}"/>
                    </div>
                </a> 
                 </div> </li> `
        }


    })
    fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=3fdb6796a354372e7fda65df33ed0329&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(serieSvaloradas){
        for(let i = 0 ; i < serieSvaloradas.results.length; i++){
            svaloradas.innerHTML += `<li> 
            <div class="uk-panel"> 
                <a href='detalleSeries.html?id=${serieSvaloradas.results[i].id}'>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w500${serieSvaloradas.results[i].poster_path}" alt="${serieSvaloradas.results[i].name}"/>
                    </div>
                </a>
            </div> </li> `
        }
    })



    


})

