window.addEventListener('load',function(){
    //VARIABLES DEL HTML Y QUERY STRING

    let detalleGenero = location.search;
    let detalleGeneroObjeto = new URLSearchParams(detalleGenero);
    let id =detalleGeneroObjeto.get('id');
    
    fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=f9762d5338820badb13e8cc378cef322&language=en-US&with_genres=${id}`)

    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(generos){
        //console.log(generos)
        

    
    })
    .catch(function(error){
        console.log(error)
    })


})