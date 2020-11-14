window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let detalle = document.querySelector('.detalle')
    let detalleSerie = location.search;
    let detalleSerieObjeto = new URLSearchParams(detalleSerie);

    //VARIABLES DEL JS
    let nombre = detalleSerieObjeto.get('nombre');
    let overview = detalleSerieObjeto.get('overview');
    let popularity = detalleSerieObjeto.get('popularity');
    let portada = detalleSerieObjeto.get('portada');
    let fecha = detalleSerieObjeto.get('fecha');
    let votos = detalleSerieObjeto.get('votos');

    

    //LO AGREGO AL HTML
    detalle.innerHTML += `  <div class="desktop">
                                <div class="primeraParte">
                                    <h1 class="nombreDesk">${nombre}</h1>
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
                                    <h1 class="nombreCel">${nombre}</h1>
                                    <section class="infoCel">
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${fecha}</p></article>
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