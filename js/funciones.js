let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('miLista'))
console.log(misPeliculasFavoritas);
function sacarDeMiLista(idEliminar){
    let miListaDeFavoritas = []
    
    for (let favorita of misPeliculasFavoritas) {
        if(favorita.id != idEliminar){
            miListaDeFavoritas.push(favorita)
        }
    }
    localStorage.setItem('miLista', JSON.stringify(miListaDeFavoritas))
    location.href = 'miLista.html'

    }
    let misPeliculasFavoritass =  JSON.parse( localStorage.getItem('miLista'))
console.log(misPeliculasFavoritass);
function sacarDeMiLista1(idEliminar){
    let miListaDeFavoritass = []
    
    for (let favoritaa of misPeliculasFavoritass) {
        if(favoritaa.id != idEliminar){
            miListaDeFavoritass.push(favoritaa)
        }
    }
    localStorage.setItem('miLista', JSON.stringify(miListaDeFavoritass))
    location.href = 'miLista.html'

    }

    