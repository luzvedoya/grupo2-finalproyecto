window.addEventListener('load', function(){
    let miListaDeFavoritas =  JSON.parse(localStorage.getItem('miLista'))
    let seriesFavoritas = JSON.parse(localStorage.getItem('seriesFavs'))







    console.log(miListaDeFavoritas);
    let peliculas = document.querySelector('.peliculas')
    for(let i = 0; i < miListaDeFavoritas.length; i++){
        //console.log(miListaDeFavoritas[i].id);
        let articulo = document.createElement('article')
        articulo.classList.add('articulo')
        articulo.innerHTML += `<a href='detallePelis.html?id=${miListaDeFavoritas[i].id}&titulo=${miListaDeFavoritas[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${miListaDeFavoritas[i].poster_path}' alt = '${miListaDeFavoritas[i].title}' /> </a> 
        <div>
            <a  class='btn btn-danger btn-block ' href='javascript:;' onclick= 'sacarDeMiListaPeli(${miListaDeFavoritas[i].id})'  >Sacar de mi lista </a>
        </div>
        `
        peliculas.append(articulo)
    }

    console.log(seriesFavoritas);
    let series = document.querySelector('.series')
    for(let i = 0; i < seriesFavoritas.length; i++){
        //console.log(populares.results[i].poster_path);
        let miarticle = document.createElement('article')
        miarticle.classList.add('miarticle')
        miarticle.innerHTML += `<a href='detalleSeries.html?id=${seriesFavoritas[i].id}&titulo=${seriesFavoritas[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${seriesFavoritas[i].poster_path}' alt = '${seriesFavoritas[i].title}' /> </a> 
        <div>
            <a  class='btn btn-danger btn-block ' href='javascript:;' onclick= 'sacarDeMiLista(${seriesFavoritas[i].id})'  >Sacar de mi lista </a>
        </div>
        `
        series.append(miarticle)
    }



})

/*

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




*/
