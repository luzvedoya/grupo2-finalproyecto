window.addEventListener('load', function(){

    //LOADER: le agrego class para que desaparezca cuando carga la pag
    document.getElementById('loader').classList.toggle('loader2');

    //query string
    let quieroBuscar = location.search;
    quieroBuscar = new URLSearchParams(quieroBuscar);

    //variables del html
    let buscador = document.querySelector('.buscador');
    let loBuscado = quieroBuscar.get('inputbuscador');


    //Que quiero que pase cuando el usuario busque antes de poner los filtros
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&query=${loBuscado}&page=1&include_adult=false`)
    .then(function(response){
        return response.json()
    })
    .then(function(info){
        console.log(info)
        let listaDePeliculas = info.results
        let lista = document.querySelector('.listaPeliculas')
        
        info.results.forEach(element => {
            console.log(element.media_type)

            if (element.media_type == "tv") {
                lista.innerHTML +=  `<a href='detalleSeries.html?id=${element.id}'>
                                        <div class="resultadoBuscador">
                                            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}"/>
                                            <h2 class="cadaTitulo">${element.name}</h2>
                                        </div>
                                    </a>`
            } if (element.media_type == "movie") {
                lista.innerHTML += `<a href='detallePelis.html?id=${element.id}'
                <div class="resultadoBuscador">
                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"/>
                    <h2 class="cadaTitulo">${element.title}</h2>
                </div>
                </a>
                `
            }
            
        });

    })
    .catch(function(error){
        console.log(error)
    })


    //capturo el boton      
    let elBoton = document.querySelector('.elBoton')

    //BOTON
    elBoton.addEventListener("change", function(){
        let lista = document.querySelector('.listaPeliculas')
        lista.innerHTML = ""

        //VEMOS EL VALUE
        if (elBoton.value === "peliculas") {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&query=${loBuscado}&page=1&include_adult=false`)
            .then(function(response){
                return response.json()
            })
            .then(function(info){
                console.log(info);
                let listaDePeliculas = info.results
                
                info.results.forEach(element => {
                    console.log(element.media_type)

                    if (element.media_type == "movie") { //PELICULAS
                        lista.innerHTML += `<a href='detallePelis.html?id=${element.id}'
                        <div class="resultadoBuscador">
                            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"/>
                            <h2 class="cadaTitulo">${element.title}</h2>
                        </div>
                        </a>
                        
                        `
                    }
                    
                });

            })
            .catch(function(error){
                console.log(error)
            })



        }else if (elBoton.value === "series") { //series
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&query=${loBuscado}&page=1&include_adult=false`)
            .then(function(response){
                return response.json()
            })
            .then(function(info){
                console.log(info)
                let listaDePeliculas = info.results
                
                info.results.forEach(element => {
                    //const element = info.results;
                    console.log(element.media_type)

                    if (element.media_type == "tv") {
                        lista.innerHTML +=  `<a href='detalleSeries.html?id=${element.id}'>
                                                <div class="resultadoBuscador">
                                                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}"/>
                                                    <h2 class="cadaTitulo">${element.name}</h2>
                                                </div>
                                            </a>`}
                    
                });

            })
            .catch(function(error){
                console.log(error)
            })






        }else{ //all
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&query=${loBuscado}&page=1&include_adult=false`)
    .then(function(response){
        return response.json()
    })
    .then(function(info){
        console.log(info)
        let listaDePeliculas = info.results;
        let lista = document.querySelector('.listaPeliculas')
        
        info.results.forEach(element => {
            console.log(element.media_type)

            if (element.media_type == "tv") {
                lista.innerHTML +=  `<a href='detalleSeries.html?id=${element.id}'>
                                        <div class="resultadoBuscador">
                                            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}"/>
                                            <h2 class="cadaTitulo">${element.name}</h2>
                                        </div>
                                    </a>`
            } if (element.media_type == "movie") {
                lista.innerHTML += `<a href='detallePelis.html?id=${element.id}'
                <div class="resultadoBuscador">
                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"/>
                    <h2 class="cadaTitulo">${element.title}</h2>
                </div>
                </a>
                `
            }
            
        });

    })
    .catch(function(error){
        console.log(error)
    })


        }
    })



})