window.addEventListener('load', function(){
    let listaGeneros = document.querySelector ('.listaGeneros');
    let genero = document.querySelector ('.genero');
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f9762d5338820badb13e8cc378cef322&language=en-US')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(geneross){
        console.log(geneross.genres);
        let generos = geneross.genres;

        generos.forEach(function(genero2) {
            listaGeneros.innerHTML += 
            `<a href='GenresDetail.html?id=${genero2.id} & name=${genero2.name}`
        })  
    
    })    
    .catch(function(error){
        console.log(error);
    })
})