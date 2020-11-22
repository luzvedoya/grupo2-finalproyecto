window.addEventListener('load', function(){
    let clickmenu = document.querySelector('.clickmenu');
    let hopciones = document.querySelector('.hopciones');
    let hopcioncitas = document.getElementById('hopcioncitas')
    let hopcioncitas1 = document.getElementById('hopcioncitas1')
    let hopcioncitas2 = document.getElementById('hopcioncitas2')
    let hopcioncitas3 = document.getElementById('hopcioncitas3')
    const menuham = document.querySelector('.menuham')
            hamenu = document.querySelector('#hamenu')
    menuham.addEventListener('click', function(){
        //clickmenu.style.display = 'block'
        clickmenu.classList.toggle('clickmenujs')   
    })

    hopcioncitas.addEventListener('mouseover', function(){
        hopcioncitas.style.textDecoration = 'underline'
    })
    hopcioncitas.addEventListener('mouseout', function(){
        hopcioncitas.style.textDecoration = 'none'
    })
    hopcioncitas1.addEventListener('mouseover', function(){
        hopcioncitas1.style.textDecoration = 'underline'
    })
    hopcioncitas1.addEventListener('mouseout', function(){
        hopcioncitas1.style.textDecoration = 'none'
    })
    hopcioncitas2.addEventListener('mouseover', function(){
        hopcioncitas2.style.textDecoration = 'underline'
    })
    hopcioncitas2.addEventListener('mouseout', function(){
        hopcioncitas2.style.textDecoration = 'none'
    })
    hopcioncitas3.addEventListener('mouseover', function(){
        hopcioncitas3.style.textDecoration = 'underline'
    })
    hopcioncitas3.addEventListener('mouseout', function(){
        hopcioncitas3.style.textDecoration = 'none'
    })
    hopcioncitas4.addEventListener('mouseover', function(){
        hopcioncitas4.style.textDecoration = 'underline'
    })
    hopcioncitas4.addEventListener('mouseout', function(){
        hopcioncitas4.style.textDecoration = 'none'
    })

    let miListaDeFavoritas =  JSON.parse(localStorage.getItem('miLista'))
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
    let peliculass = document.querySelector('.peliculass')
    for(let i = 0; i < miListaDeFavoritass.length; i++){
        //console.log(valoradas.results[i].poster_path);
        let articuloo = document.createElement('article')
        articuloo.classList.add('articuloo')
        articuloo.innerHTML += `<a href='detallePelicula.html?id=${miListaDeFavoritass[i].id}&titulo=${miListaDeFavoritass[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${miListaDeFavoritass[i].poster_path}' alt = '${miListaDeFavoritass[i].title}' /> </a> 
        <div>
            <a  class='btn btn-danger btn-block ' href='javascript:;' onclick= 'sacarDeMiLista1(${miListaDeFavoritass[i].id})'  >Sacar de mi lista </a>
        </div>
        `
        peliculass.append(articuloo)
    }



})