window.addEventListener('load', function(){
    let populares = document.querySelector('#populares')
    let valoradas = document.getElementById('valoradas')
    let spopulares = document.getElementById('spopulares')
    let svaloradas = document.getElementById('svaloradas')
    let peliculas = document.querySelector('.peliculas')
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(peliculasPopulares){
        for(let i = 0 ; i < peliculasPopulares.results.length; i++){
            populares.innerHTML += `<li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${peliculasPopulares.results[i].poster_path} " alt="${peliculasPopulares.results[i].title}"> <div class="uk-position-center  uk-panel"><h1> ${i+1} </h1></div>            <div>
            <a  id= '${JSON.stringify(peliculasPopulares.results[i])}' href= '#' class='btn btn-success btn-block botonMiLsta' >Agregar a mi lista </a>
            </div> </div> </li>
            ` 
        }
        let botonMiLista = document.querySelectorAll('.botonMiLsta')
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

        });

    })

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(peliculasValoradas){
        for(let i = 0 ; i < peliculasValoradas.results.length; i++){
            valoradas.innerHTML += `<li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${peliculasValoradas.results[i].poster_path} " alt="${peliculasValoradas.results[i].title}"> <div class="uk-position-center  uk-panel"><h1> ${i+1} </h1></div> </div> </li> `
        }
    })
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(serieSpopulares){
        for(let i = 0 ; i < serieSpopulares.results.length; i++){
            spopulares.innerHTML += `<li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${serieSpopulares.results[i].poster_path} " alt="${serieSpopulares.results[i].title}"> <div class="uk-position-center  uk-panel"><h1> ${i+1} </h1></div> </div> </li> `
        }
    })
    fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=3fdb6796a354372e7fda65df33ed0329&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(serieSvaloradas){
        for(let i = 0 ; i < serieSvaloradas.results.length; i++){
            svaloradas.innerHTML += `<li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${serieSvaloradas.results[i].poster_path} " alt="${serieSvaloradas.results[i].title}"> <div class="uk-position-center  uk-panel"><h1> ${i+1} </h1></div> </div> </li> `
        }
    })



})
// `` < > 18581b65b3e6ad002984aa4952878117