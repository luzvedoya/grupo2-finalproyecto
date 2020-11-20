let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('miLista'))
function sacarDeMiLista(idEliminar){
    let miListaDeFavoritas = []
    
    for (let favorita of misPeliculasFavoritas) {
        if(favorita.id != idEliminar){
            miListaDeFavoritas.push(favorita)
        }
    }
    }
    