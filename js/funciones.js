let misPeliculasFavoritas =  JSON.parse( localStorage.getItem('miLista'))
let lasMejoresSeries =  JSON.parse( localStorage.getItem('seriesFavs'))

//console.log(misPeliculasFavoritas);
    function sacarDeMiListaPeli(idEliminar){
        let miListaDeFavoritas = []
        
        for (let favorita of misPeliculasFavoritas) {
            if(favorita.id != idEliminar){
                miListaDeFavoritas.push(favorita)
            }
        }
        localStorage.setItem('miLista', JSON.stringify(miListaDeFavoritas))
        location.href = 'miLista.html'

        }


    function sacarDeMiLista(idEliminar){
        let seriesDeMiLista = []
        
        for (let preferida of lasMejoresSeries) {
            if(preferida.id != idEliminar){
                seriesDeMiLista.push(preferida)
            }
        }
        localStorage.setItem('seriesFavs', JSON.stringify(seriesDeMiLista))
        location.href = 'miLista.html'
    
        }
    

    