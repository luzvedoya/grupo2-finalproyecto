window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let detalle = document.querySelector('.detalle')
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








})