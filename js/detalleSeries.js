window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let detalle = document.querySelector('.detalle');
    let critica = document.querySelector('.critica');
    let trailer = document.querySelector ('.trailer');
    let detalleSerie = location.search;
    let detalleSerieObjeto = new URLSearchParams(detalleSerie);

    //VARIABLES DEL JS
    let id = detalleSerieObjeto.get('id');


    //RECORRO LOS REVIEWS
    fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(reviews){
        console.log(reviews);

        if (reviews.results == 0) {
            critica.innerHTML += `<div class="noReview"><h2>No reviews yet</h2></div>`

            
        }else{
            reviews.results.forEach(review => {
             critica.innerHTML += `
                <div class="parteCritica">
                    <article class="datosCritica"><h3 class="dato1">Author:</h3><p class="dato2Critica">${review.author}</p></article>
                    <article class="datosCritica"><h3 class="dato1">Puntuation:</h3><p class="dato2Critica">${review.author_details.rating}</p></article>
                    <p class="infoCritica">${review.content}</p>
                </div>
                `
            })
        }
        
    })
    .catch(function(error){
        console.log(error)
    })

     //RECORRO EL TRAILER
     fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1`)
     .then(function(respuesta){
         return respuesta.json()
     })
     .then(function(videos){
         //console.log(videos);
         
            if (videos.results != 0) {
                trailer.innerHTML += `<div class="videoTrailer"><iframe class="videito" src="https://www.youtube.com/embed/${videos.results[0].key}?start=2" autoplay></iframe></div>`
         
            }else{
                 trailer.innerHTML = `<h2 class="noReview">No video</h2>`
            }
         
     })
     .catch(function(error){
         console.log(error)
     })


    
    
    //TRAIGO LA INFO DESDE DETAIL 
   fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=18581b65b3e6ad002984aa4952878117&language=en-US`)
   .then(function(respuesta){
       return respuesta.json()
   })
   .then(function(serie){

    let generos = ''
    serie.genres.forEach(genero => { 
        generos += `<div class="todaParteGeneros"><a href="detalleGeneros.html?id= ${genero.id}&name=${genero.name}" class="infoGeneross">
        <p class="dato2Generos">${genero.name}</p></div>
    </a>`
        
    })

   

    detalle.innerHTML += `  <div class="desktop">
                                <div class="primeraParte">
                                    <h1 class="tituloDesk">${serie.name}</h1>
                                    <div class="parteBotonCriticas">
                                        <a href="#criticas" class="botonCriticas">Read reviews</a>
                                        <a href="#trailer" class="botonCriticas">Watch the trailer</a>
                                    </div>
                                </div>
                                <div class="todoDetalle">
                                    <section class="portada">
                                        <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}"/>
                                    </section>
                                    
                                    <section class="info">
                                    
                                    <article class="datos">
                                        <h3 class="dato1">Genre: </h3> 
                                        <div id="geneross">${generos}</div>
                                    </article>
                                    <article class="datos"><h3 class="dato1">Release date: </h3><p class="dato2">${serie.first_air_date}</p></article>
                                    <article class="datos"><h3 class="dato1">Seasons: </h3><p class="dato2">${serie.number_of_seasons}</p></article>
                                    <article class="datos"><h3 class="dato1">Episodes:: </h3><p class="dato2">${serie.number_of_episodes}</p></article>
                                    <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${serie.popularity}</p></article>
                                    <article class="datos"><h3 class="dato1">Votes' average: </h3><p class="dato2">${serie.vote_average}</p></article>
                                    <article class="datos"><h3 class="dato1">Overview: </h3><p class="dato2">${serie.overview}</p></article>
                                    </section>

                                </div>
                            </div>
                            <div class="celular">
                                <div class="todoDetalleCel">
                                    <h1 class="tituloCel">${serie.name}</h1>
                                    <div class="parteBotonCriticas">
                                        <a href="#criticas" class="botonCriticas">Read reviews</a>
                                        <a href="#trailer" class="botonCriticas">Watch the trailer</a>
                                    </div>
                                    <section class="infoCel">
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${serie.first_air_date}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Popularity: </h3><p class="dato2Cel">${serie.popularity}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Votes' average: </h3><p class="dato2Cel">${serie.vote_average}</p></article>
                                        <article class="datoCel">
                                            <h3 class="dato1Cel">Genero: </h3>
                                            <div id="geneross">${generos}</div>
                                        </article>
                                        <article class="datoCel"><h3 class="dato1Cel">Overview: </h3><p class="dato2Cel">${serie.overview}</p></article>                    
                                        <section class="portadaCel">
                                            <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}"/>
                                        </section>
                                    </section>

                                </div>
                            </div>  
                        `


                        //BOTON AGREGAR A MI LISTA
                        let seriesBoton = document.querySelector('.seriesBoton')
                        let arraySeriesPreferidas
                        seriesBoton.addEventListener('click', function(event){
                            event.preventDefault()
                                alert('Added to favorites!')       

                            let misSeriesFavoritas = localStorage.getItem('seriesFavs')
                            if (misSeriesFavoritas === null) {
                                arraySeriesPreferidas = []
                                arraySeriesPreferidas.push(serie)
                                
                                
                            } else {
                                arraySeriesPreferidas = JSON.parse(misSeriesFavoritas)
                                for (let i =0; i < arraySeriesPreferidas.length; i++) {
                                    if (arraySeriesPreferidas[i].id != serie.id) {
                                       arraySeriesPreferidas.push(serie)
                                        
                                    }
                                }
                            }
                            
                            localStorage.setItem('seriesFavs', JSON.stringify(arraySeriesPreferidas))


                        })


   })






})