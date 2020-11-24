window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let detalle = document.querySelector('.detalle');
    let critica = document.querySelector('.critica');
    let detalleSerie = location.search;
    let detalleSerieObjeto = new URLSearchParams(detalleSerie);

    //VARIABLES DEL JS
    let titulo = detalleSerieObjeto.get('titulo');
    let overview = detalleSerieObjeto.get('overview');
    let popularity = detalleSerieObjeto.get('popularity');
    let portada = detalleSerieObjeto.get('portada');
    let fecha = detalleSerieObjeto.get('fecha');
    let votos = detalleSerieObjeto.get('votos');
    let generos = detalleSerieObjeto.get('genero');
    let id = detalleSerieObjeto.get('id');


    //RECORRO LOS REVIEWS
    fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(reviews){
        console.log(reviews);
        reviews.results.forEach(review => {
           critica.innerHTML += `
                    <div class="parteCritica">
                        <article class="datosCritica"><h3 class="dato1">Autor:</h3><p class="dato2Critica">${review.author}</p></article>
                        <article class="datosCritica"><h3 class="dato1">Puntuacion:</h3><p class="dato2Critica">${review.author_details.rating}</p></article>
                        <p class="infoCritica">${review.content}</p>
                    </div>
           `
        });
    })
    .catch(function(error){
        console.log(error)
    })



    /*
    //LO AGREGO AL HTML
    detalle.innerHTML += `  <div class="desktop">
                                <div class="primeraParte">
                                    <h1 class="tituloDesk">${titulo}</h1>
                                    <section class="abajoTitulo">
                                        <h2 class="fecha">${fecha}</h2>
                                    </section>
                                </div>
                                <div class="todoDetalle">
                                    <section class="portada">
                                        <img src="https://image.tmdb.org/t/p/w500${portada}"/>
                                    </section>
                                    
                                    <section class="info">
                                    <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${popularity}</p></article>
                                    <article class="datos"><h3 class="dato1">Votes' average: </h3><p class="dato2">${votos}</p></article>
                                    <article class="datos"><h3 class="dato1">Sinopsis: </h3><p class="dato2">${overview}</p></article>
                                    </section>

                                </div>
                            </div>
                            <div class="celular">
                                <div class="todoDetalleCel">
                                    <h1 class="tituloCel">${titulo}</h1>
                                    <section class="infoCel">
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${fecha}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Popularity: </h3><p class="dato2Cel">${popularity}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Votes' average: </h3><p class="dato2Cel">${votos}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Genero: </h3><p class="dato2Cel">${generos}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Sinopsis: </h3><p class="dato2Cel">${overview}</p></article>                    
                                        <section class="portadaCel">
                                            <img src="https://image.tmdb.org/t/p/w500${portada}"/>
                                        </section>
                                    </section>

                                </div>
                            </div>  
                        `

    */

   fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=18581b65b3e6ad002984aa4952878117&language=en-US`)
   .then(function(respuesta){
       return respuesta.json()
   })
   .then(function(serie){

    serie.genres.forEach(genero => { //NO ESTOY PUDIENDO PONER LOS GENEROS
        //console.log(genero);
        let nombreGenero = (genero.name)
        console.log(nombreGenero);
    });

    detalle.innerHTML += `  <div class="desktop">
                                <div class="primeraParte">
                                    <h1 class="tituloDesk">${serie.name}</h1>
                                    <a href="#criticas" class="botonCriticas">Leer criticas</a>
                                </div>
                                <div class="todoDetalle">
                                    <section class="portada">
                                        <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}"/>
                                    </section>
                                    
                                    <section class="info">
                                    <article class="datos"><h3 class="dato1">Genre: </h3><p class="dato2">${serie.nombreGenero}</p></article>
                                    <article class="datos"><h3 class="dato1">Release date: </h3><p class="dato2">${serie.first_air_date}</p></article>
                                    <article class="datos"><h3 class="dato1">Seasons: </h3><p class="dato2">${serie.number_of_seasons}</p></article>
                                    <article class="datos"><h3 class="dato1">Episodes:: </h3><p class="dato2">${serie.number_of_episodes}</p></article>
                                    <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${serie.popularity}</p></article>
                                    <article class="datos"><h3 class="dato1">Votes' average: </h3><p class="dato2">${serie.vote_average}</p></article>
                                    <article class="datos"><h3 class="dato1">Sinopsis: </h3><p class="dato2">${serie.overview}</p></article>
                                    </section>

                                </div>
                            </div>
                            <div class="celular">
                                <div class="todoDetalleCel">
                                    <h1 class="tituloCel">${serie.name}</h1>
                                    <a href="#criticas" class="botonCriticas">Leer criticas</a>
                                    <section class="infoCel">
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${serie.first_air_date}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Popularity: </h3><p class="dato2Cel">${serie.popularity}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Votes' average: </h3><p class="dato2Cel">${serie.vote_average}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Genero: </h3><p class="dato2Cel">${generos}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Sinopsis: </h3><p class="dato2Cel">${serie.overview}</p></article>                    
                                        <section class="portadaCel">
                                            <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}"/>
                                        </section>
                                    </section>

                                </div>
                            </div>  
                        `

   })






})