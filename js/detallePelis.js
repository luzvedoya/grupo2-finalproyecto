window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let videos = document.querySelector('.videos');
    let detalle = document.querySelector('.detalle')
    let detallePelicula = location.search;
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula);

    //VARIABLES DEL JS
    let titulo = detallePeliculaObjeto.get('titulo');
    let overview = detallePeliculaObjeto.get('overview');
    let popularity = detallePeliculaObjeto.get('popularity');
    let portada = detallePeliculaObjeto.get('portada');
    let fecha = detallePeliculaObjeto.get('fecha');
    let duracion = detallePeliculaObjeto.get('duracion');
    let votos = detallePeliculaObjeto.get('votos');
    let id = detallePeliculaObjeto.get('id');


    //RECORRO LOS VIDEOS
    /*fetch('https://api.themoviedb.org/3/movie/550/videos?api_key=18581b65b3e6ad002984aa4952878117')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(video){
        console.log(video);
        video.results.forEach(trailer => {
            videos.innerHTML +=`
                            <video src="https://www.youtube.com/watch?v=${trailer.key}"></video>
                            `
        });
    })
    .catch(function(error){
        console.log(error)
    })*/
    
    

    //LO AGREGO AL HTML
    detalle.innerHTML += `  <div class="desktop">
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








})