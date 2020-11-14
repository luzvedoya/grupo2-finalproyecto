window.addEventListener('load', function(){
    let populares = document.querySelector('#populares')
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=18581b65b3e6ad002984aa4952878117&language=en-US&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(peliculasPopulares){
        for(let i = 0 ; i < peliculasPopulares.results.length; i++){
            populares.innerHTML += `<li> <div class="uk-panel"> <img src="https://image.tmdb.org/t/p/w500/${peliculasPopulares.results[i].poster_path} " alt="${peliculasPopulares.results[i].title}"> <div class="uk-position-center  uk-panel"><h1> ${i+1} </h1></div> </div> </li> `
        }
    })
})
// `` < >