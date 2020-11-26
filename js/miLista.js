window.addEventListener('load', function(){
    let miListaDeFavoritas =  JSON.parse(localStorage.getItem('miLista'))
    //let nuestrosFavoritos = location.search;
    //let nuestrosFavoritosObjeto = new URLSearchParams(nuestrosFavoritos);
    //let id = nuestrosFavoritosObjeto.get("id");

    let misFavoritos = document.querySelector(".todosLosFavoritos")
    //let miListadePeliculas = JSON.parse(localStorage.getItem("miLista"))
    //console.log(miListadePeliculas);






    console.log(miListaDeFavoritas);
    let peliculas = document.querySelector('.peliculas')
    for(let i = 0; i < miListaDeFavoritas.length; i++){
        //console.log(populares.results[i].poster_path);
        let articulo = document.createElement('article')
        articulo.classList.add('articulo')
        articulo.innerHTML += `<a href='detallePelicula.html?id=${miListaDeFavoritas[i].id}&titulo=${miListaDeFavoritas[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${miListaDeFavoritas[i].poster_path}' alt = '${miListaDeFavoritas[i].title}' /> </a> 
        <div>
            <a  class='btn btn-danger btn-block ' href='javascript:;' onclick= 'sacarDeMiLista(${miListaDeFavoritas[i].id})'  >Sacar de mi lista </a>
        </div>
        `
        peliculas.append(articulo)
    }
    let miListaDeFavoritass =  JSON.parse(localStorage.getItem('miListaa'))
    console.log(miListaDeFavoritass);


})