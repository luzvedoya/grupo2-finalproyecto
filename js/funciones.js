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

    