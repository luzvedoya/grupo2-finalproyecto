window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let critica = document.querySelector('.critica');
    let detalle = document.querySelector('.detalle');
    let botonCriticas = document.querySelector('.botonCriticas');
    let detallePelicula = location.search;
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula);

    //VARIABLES DEL JS
    let id = detallePeliculaObjeto.get('id');

    /*
    let titulo = detallePeliculaObjeto.get('titulo');
    let overview = detallePeliculaObjeto.get('overview');
    let popularity = detallePeliculaObjeto.get('popularity');
    let portada = detallePeliculaObjeto.get('portada');
    let fecha = detallePeliculaObjeto.get('fecha');
    let duracion = detallePeliculaObjeto.get('duracion');
    let votos = detallePeliculaObjeto.get('votos');
    let genero =detallePeliculaObjeto.get('genero');
    */

    //RECORRO LOS REVIEWS
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1`)
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
    

    //LO AGREGO AL HTML
   /* detalle.innerHTML += `  <div class="desktop">
                                <div class="primeraParte">
                                    <h1 class="tituloDesk">${titulo}</h1>
                                    <section class="abajoTitulo">
                                        <h2 class="fecha">${fecha}</h2>
                                        <h2 class="duracion">${duracion}</h2>
                                    </section>
                                </div>
                                <div class="todoDetalle">
                                    <section class="portada">
                                        <img src="https://image.tmdb.org/t/p/w500${portada}"/>
                                    </section>
                                    
                                    <section class="info">
                                        <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${popularity}</p></article>
                                        <article class="datos"><h3 class="dato1">Genero: </h3><p class="dato2">${genero}</p></article>
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
                                        <article class="datoCel"><h3 class="dato1Cel">Duracion: </h3><p class="dato2Cel">${duracion}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Popularity: </h3><p class="dato2Cel">${popularity}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Votes' average: </h3><p class="dato2Cel">${votos}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Sinopsis: </h3><p class="dato2Cel">${overview}</p></article>                    
                                        <section class="portadaCel">
                                            <img src="https://image.tmdb.org/t/p/w500${portada}"/>
                                        </section>
                                    </section>

                                </div>
                            </div>  
                        `
    */

    //INTENTO DE TRAER DESDE DETAILS
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=18581b65b3e6ad002984aa4952878117&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(peli){
        //console.log(peli);

        peli.genres.forEach(genero => { //NO ESTOY PUDIENDO PONER LOS GENEROS
            //console.log(genero);
            let nombreGenero = (genero.name)
            console.log(nombreGenero);
        });
        
        detalle.innerHTML += `  <div class="desktop">
                                    <div class="primeraParte">
                                        <h1 class="tituloDesk">${peli.title}</h1>
                                        <a href="#criticas" class="botonCriticas">Leer criticas</a>
                                    </div>
                                    <div class="todoDetalle">
                                        <section class="portada">
                                            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}"/>
                                        </section>
                                        
                                        <section class="info">
                                            <article class="datos"><h3 class="dato1">Release date: </h3><p class="dato2">${peli.release_date}</p></article>
                                            <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${peli.popularity}</p></article>
                                            <article class="datos"><h3 class="dato1">Genre: </h3><p class="dato2">${peli.nombreGenero}</p></article>
                                            <article class="datos"><h3 class="dato1">Votes' average: </h3><p class="dato2">${peli.vote_average}</p></article>
                                            <article class="datos"><h3 class="dato1">Sinopsis: </h3><p class="dato2">${peli.overview}</p></article>
                                            
                                        </section>

                                    </div>
                                </div>
                                <div class="celular">
                                <div class="todoDetalleCel">
                                    <h1 class="tituloCel">${peli.title}</h1>
                                    <a href="#criticas" class="botonCriticas">Leer criticas</a>
                                    <section class="infoCel">
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${peli.release_date}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Genre: </h3><p class="dato2Cel">${peli.nombreGenero}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Popularity: </h3><p class="dato2Cel">${peli.popularity}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Votes' average: </h3><p class="dato2Cel">${peli.vote_average}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Sinopsis: </h3><p class="dato2Cel">${peli.overview}</p></article>                    
                                        <section class="portadaCel">
                                            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}"/>
                                        </section>
                                    </section>

                                </div>
                            </div>  
                                
                                `

    })

    botonCriticas.addEventListener('mouseover', function(){
        botonCriticas.style.textDecoration = 'underline'
    })
    botonCriticas.addEventListener('mouseout', function(){
        botonCriticas.style.textDecoration = 'none'
    })






})