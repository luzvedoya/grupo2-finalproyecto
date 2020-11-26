window.addEventListener('load', function(){
    let clickmenu = document.querySelector('.clickmenu');
    let hopciones = document.querySelector('.hopciones');
    let hopcioncitas = document.getElementById('hopcioncitas')
    let hopcioncitas1 = document.getElementById('hopcioncitas1')
    let hopcioncitas2 = document.getElementById('hopcioncitas2')
    let hopcioncitas3 = document.getElementById('hopcioncitas3')
    let lupita = document.querySelector('.lupita')
    let hbuscador = document.querySelector('.hbuscador')
    

    const menuham = document.querySelector('.menuham')
            hamenu = document.querySelector('#hamenu')
    menuham.addEventListener('click', function(){
        //clickmenu.style.display = 'block'
        clickmenu.classList.toggle('clickmenujs')   
    })

    lupita.addEventListener('click', function(){
        hbuscador.classList.toggle('hbuscadorjs')   
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


    let sesion= document.querySelector('.sesion')
    let datos = location.search;
    let datosObjeto = new URLSearchParams('datos');
    datosObjeto.get('nombre');

    sesion.innerHTML = `Bienvenid@ ${datosObjeto.get('nombre')}`
    

    /*function bienvenida(nombre){
        let nombreRegistrado = "Martina";
        if(nombre == nombreRegistrado){
            console.log(`Bienvenida ${nombre}`
            )
        }else{
            console.log('Lo sentimos no puede estar aquí')
        }
    
    }
    bienvenida("Martina");
    



    function bienvenida(sesion){

        proximamente.results.forEach(prox => {  
            proxima.innerHTML += `<article class="adetalle3"><a href='detallePelis.html?id=${prox.id}&titulo=${prox.title}&overview=${prox.overview}&popularity=${prox.popularity}&portada=${prox.poster_path}&fecha=${prox.release_date}&duracion=${prox.runtime}&votos=${prox.vote_average}'
                                    <div>
                                    <img src="https://image.tmdb.org/t/p/w500${prox.poster_path}" alt="${prox.title}"/>
                                    <h2 class="cadaTitulo">${prox.title}</h2>
                                    </div>
                                    </a></article>`
                                });
                               

sesion.innerHTML +=
                
   
*/
})