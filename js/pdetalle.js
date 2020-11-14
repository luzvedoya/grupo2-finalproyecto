window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
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
                                        <section>
                                            <h2>Popularity: ${popularity}</h2>
                                            <h2>Votes' average: ${votos}</h2>
                                            <p>Sinopsis: ${overview}</p>
                                        </section>
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