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

        peli.genres.forEach(genero => { 
            //console.log(genero);
            nombreGenero.push(genero.name) 
            idGenero.push(genero.id)
            //console.log(idGenero);
            //console.log(nombreGenero);
            
        })
        /*for (let i = 0; i < peli.length; i++) {
            populares.innerHTML += `<a id= '${JSON.stringify(peli.length[i])}' href= '#' class="botonMiLista">Agregar a mi Lista</a>`
        }*/
                


        
        detalle.innerHTML += `  <div class="desktop">
                                    <div class="primeraParte">
                                        <h1 class="tituloDesk">${peli.title}</h1>
                                        <div class="parteBotonCriticas">
                                            <a href="#criticas" class="botonCriticas">Leer criticas</a>
                                        </div>
                                    </div>
                                    <div class="todoDetalle">
                                        <section class="portada">
                                            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}"/>
                                        </section>
                                        
                                        <section class="info">
                                        <article class="datos"><h3 class="dato1">Mi Lista: </h3><p class="datoLista"><a id= '${JSON.stringify(peli)}' href= '#' class="botonMiLista" onclick = agregar() >Agregar a mi Lista</a>  </p></article>
                                            <article class="datos">
                                                <h3 class="dato1">Genre: </h3> 
                                                <a href="detalleGeneros.html?id= ${idGenero}&name=${nombreGenero}">
                                                    <p class="dato2">${nombreGenero}</p>
                                                </a>
                                            </article>
                                            <article class="datos"><h3 class="dato1">Release date: </h3><p class="dato2">${peli.release_date}</p></article>
                                            <article class="datos"><h3 class="dato1">Popularity: </h3><p class="dato2">${peli.popularity}</p></article>
                                            <article class="datos"><h3 class="dato1">Votes' average: </h3><p class="dato2">${peli.vote_average}</p></article>
                                            <article class="datos"><h3 class="dato1">Sinopsis: </h3><p class="dato2">${peli.overview}</p></article>
                                            
                                        </section>

                                    </div>
                                </div>
                                <div class="celular">
                                <div class="todoDetalleCel">
                                    <h1 class="tituloCel">${peli.title}</h1>
                                    <div class="parteBotonCriticas">
                                        <a href="#criticas" class="botonCriticas">Leer criticas</a>
                                    </div>
                                    <section class="infoCel">
                                    <article class="datoCel">
                                            <h3 class="dato1Cel">Genero: </h3>
                                            <p class="dato2Cel">
                                                <a href="detalleGeneros.html?id= ${idGenero}&name=${nombreGenero}">
                                                    <p class="dato2">${nombreGenero}</p>
                                                </a>
                                            </p>
                                        </article>
                                        <article class="datoCel"><h3 class="dato1Cel">Release date: </h3><p class="dato2Cel">${peli.release_date}</p></article>
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
                                
                                /*let botonMiLista = document.querySelector('.botonMiLista')
                                let arrayMiListaDeFavoritas
                                console.log(botonMiLista)
                                //botonMiLista.addEventListener('click', function(e){
                                    //console.log('hola'+'-----------------------------')
                                    //console.log(e)
                                    //e.preventDefault()

                                    let miListadePeliculas = localStorage.getItem('miLista')
                                    if(miListadePeliculas == null){
                                        arrayMiListaDeFavoritas = []
                                    }else{
                                         arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
                                    }
                                    arrayMiListaDeFavoritas.push(JSON.parse(botonMiLista.id))
                                    localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))
                                
                               // })*/

                        

    })

    /* DANI ACA INTENTAMOS HACERLO DE OTRA FORMA, PERO IGUAL NO NOS FUNCIONO (FORMA 2)
    let miListadePeliculas = localStorage.getItem('miLista')
    let favoritos = document.querySelector('.favs') //esto lo creamos en el html para internar traer el boton dirrecto de ahi
    let arrayMiListaDeFavoritas = "";

    if(miListadePeliculas === null){
        arrayMiListaDeFavoritas = [];
    }else{
        arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
    }





    favoritos.addEventListener('click', function(){
        arrayMiListaDeFavoritas.push({
            tipo: tipo,
            id: id
        })


        localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))

    })
    */




    /*botonCriticas.addEventListener('mouseover', function(){
        botonCriticas.style.textDecoration = 'underline'
    })
    botonCriticas.addEventListener('mouseout', function(){
        botonCriticas.style.textDecoration = 'none'
    })*/


    //<a id= '${JSON.stringify(peli)}' href= '#' class="botonMiLista" onclick = agregar() >Agregar a mi Lista</a>  




})