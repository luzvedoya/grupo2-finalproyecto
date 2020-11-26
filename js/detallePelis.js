window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING
    let critica = document.querySelector('.critica');
    let detalle = document.querySelector('.detalle');
    let botonCriticas = document.querySelector('.botonCriticas');
    let detallePelicula = location.search;
    let detallePeliculaObjeto = new URLSearchParams(detallePelicula);

    //VARIABLES DEL JS
    let id = detallePeliculaObjeto.get('id');

    //RECORRO LOS REVIEWS
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(reviews){
        //console.log(reviews);
        reviews.results.forEach(review => {
           critica.innerHTML += `
                    <div class="parteCritica">
                        <article class="datosCritica"><h3 class="dato1">Author:</h3><p class="dato2Critica">${review.author}</p></article>
                        <article class="datosCritica"><h3 class="dato1">Puntuation:</h3><p class="dato2Critica">${review.author_details.rating}</p></article>
                        <p class="infoCritica">${review.content}</p>
                    </div>
           `
        });
    })
    .catch(function(error){
        console.log(error)
    })
    

   //let populares = document.querySelector('.datoLista')

    let nombreGenero = []
    let idGenero = []

    //INTENTO DE TRAER DESDE DETAILS
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=18581b65b3e6ad002984aa4952878117&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(peli){
        //console.log(peli);

        

        /*peli.genres.forEach(genero => { 
            let nombreGenero = genero.name
            let idGenero = genero.id
            
        })*/

        let generos = ''
                                peli.genres.forEach(genero => { 
                                    //console.log(genero);
                                    generos += `<a href="detalleGeneros.html?id= ${genero.id}&name=${genero.name}">
                                    <p class="dato2">${genero.name}</p>
                                </a>`
                                    
                                    //console.log(idGenero);
                                    //console.log(nombreGenero);
                                    
                                })
         


        
        detalle.innerHTML += `  <div class="desktop">
                                    <div class="primeraParte">
                                        <h1 class="tituloDesk">${peli.title}</h1>
                                        <div class="parteBotonCriticas">
                                            <a href="#criticas" class="botonCriticas">Read reviews</a>
                                        </div>
                                    </div>
                                    <div class="todoDetalle">
                                        <section class="portada">
                                            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}"/>
                                        </section>
                                        
                                        <section class="info">

                                        <article class="datos"><h3 
                                            <article class="datos">
                                                <h3 class="dato1">Genre: </h3> 
                                                <div id="geneross">${generos}</div>
                                                
                                            </article>
                                            <article class="datos"><h3 class="dato1">Release date: </h3><p class="dato2">${peli.release_date}</p></article>
                                            <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${peli.popularity}</p></article>
                                            <article class="datos"><h3 class="dato1">Votes' average: </h3><p class="dato2">${peli.vote_average}</p></article>
                                            <article class="datos"><h3 class="dato1">Overview: </h3><p class="dato2">${peli.overview}</p></article>
                                            
                                        </section>

                                    </div>
                                </div>
                                <div class="celular">
                                <div class="todoDetalleCel">
                                    <h1 class="tituloCel">${peli.title}</h1>
                                    <div class="parteBotonCriticas">
                                        <a href="#criticas" class="botonCriticas">Read reviews</a>
                                    </div>
                                    <section class="infoCel">
                                    <article class="datoCel">
                                            <h3 class="dato1Cel">Genre: </h3>
                                            <div id="geneross">${generos}</div>
                                        </article>
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${peli.release_date}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Popularity: </h3><p class="dato2Cel">${peli.popularity}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Votes' average: </h3><p class="dato2Cel">${peli.vote_average}</p></article>
                                        <article class="datoCel"><h3 class="dato1Cel">Overview: </h3><p class="dato2Cel">${peli.overview}</p></article>                    
                                        <section class="portadaCel">
                                            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}"/>
                                        </section>
                                    </section>

                                </div>
                            </div>  
                                
                                `
                                
                                let botonMiLista = document.querySelector('.botonMiLista')
                                let arrayMiListaDeFavoritas
                                console.log(botonMiLista)
                                botonMiLista.addEventListener('click', function(e){
                                    e.preventDefault()
                                    alert('Added to favorites!')       
                                    
                                    let miListadePeliculas = localStorage.getItem('miLista')
                                    console.log(miListadePeliculas + '-----------')
                                    if(miListadePeliculas === null){
                                        arrayMiListaDeFavoritas = []
                                    }else{
                                         arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
                                    }
                                    //console.log(JSON.parse(peli))
                                    arrayMiListaDeFavoritas.push(peli)
                                    localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))
                                    
                                })
                                
                                


                        

    })

})