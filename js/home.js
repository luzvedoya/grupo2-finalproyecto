window.addEventListener('load', function(){
   
    let coverfotos = document.querySelector ('#coverfotos')
    let populares = document.querySelector('#populares')
    let valoradas = document.getElementById('valoradas')
    let spopulares = document.getElementById('spopulares')
    let svaloradas = document.getElementById('svaloradas')
    let peliculas = document.querySelector('.peliculas')


    /*fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3fdb6796a354372e7fda65df33ed0329')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function (coverFotoss) {
        for (let i = 0; i < coverFotoss.results.length; i++) {
            coverfotos.innerHTML += `<li>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
            <img class="showfotos" src="https://image.tmdb.org/t/p/w500${coverFotoss.results[i].backdrop_path}" alt="${coverFotoss.results[i].title}" uk-cover>
            </div>
        </li>
        `         
        }
    })*/
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
        /*let botonMiLista = document.querySelectorAll('.botonMiLsta')
        let arrayMiListaDeFavoritas;
        //console.log(botonMiLista)
        botonMiLista.forEach(pelicula => {
            pelicula.addEventListener('click', function(e){
                e.preventDefault()
                let miListadePeliculas = localStorage.getItem('miLista')
                if(miListadePeliculas == null){
                    arrayMiListaDeFavoritas = [];
                }else{
                    arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
                }
                arrayMiListaDeFavoritas.push(JSON.parse(this.id))
                localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))

            } )

        });*/

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
        /*let botonMiListaa = document.querySelectorAll('.botonMiLstaa')
        let arrayMiListaDeFavoritass;
        console.log(botonMiListaa)
        botonMiListaa.forEach(peliculaa => {
            peliculaa.addEventListener('click', function(e){
                e.preventDefault()
                let miListadePeliculass = localStorage.getItem('miLista')
                if(miListadePeliculass == null){
                    arrayMiListaDeFavoritass = [];
                }else{
                    arrayMiListaDeFavoritass = JSON.parse(miListadePeliculass)
                }
                arrayMiListaDeFavoritass.push(JSON.parse(this.id))
                localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritass))
                

            } )

        });*/
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
        /*let botonMiLista2 = document.querySelectorAll('.botonMiLsta2')
        let arrayMiListaDeFavoritas2;
        //console.log(botonMiLista)
        botonMiLista2.forEach(pelicula2 => {
            pelicula2.addEventListener('click', function(e){
                e.preventDefault()
                let miListadePeliculas2 = localStorage.getItem('miLista2')
                if(miListadePeliculas2 == null){
                    arrayMiListaDeFavoritas2 = [];
                }else{
                    arrayMiListaDeFavoritas2 = JSON.parse(miListadePeliculas2)
                }
                arrayMiListaDeFavoritas2.push(JSON.parse(this.id))
                localStorage.setItem('miLista2', JSON.stringify(arrayMiListaDeFavoritas2))

            })
        });*/

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
// `` < > 18581b65b3e6ad002984aa4952878117