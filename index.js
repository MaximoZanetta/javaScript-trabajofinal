

const row = document.getElementById('fila')

row.addEventListener('click',(e)=>{
    console.log(e.target.tagName)
    if(e.target && e.target.tagName === 'BUTTON'){
        const hideText = document.getElementById('hideText')
        console.log(hideText)
            hideText.classList.toggle('show')
            console.log(e.target.parent)

    }
})

async function getPersonajes(){
    let contentHTML='';
    let personajes = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b84960ad02762ddb282d28e63284d84d&hash=c037b543685fbc89f2ed82d60b9d8683`
    await fetch(personajes)
    .then((res)=> res.json()
    .then((json)=> {
        for(const hero of json.data.results){
            let urlhero = hero.urls[0].url;
            contentHTML += `
            <div class="col-md-4">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="" class="img-hero">
            <h3 class="title">${hero.name}</h3>
            <p class="text-center">Wiki sobre ${hero.name}, <a href="${urlhero}" target="_blank">Info aca</a></p>
            <span id="hideText" class="hide">
            <p class="text-center">Este personaje aparecio en ${hero.comics.available} comics, en ${hero.series.available} series, en ${hero.stories.available} historias y en ${hero.events.available} eventos.</p>
            </span>
            <button id="hideText-btn ${hero.id}" class="readMore_btn">Leer mas</button>
            
            </div>`
        }
        row.innerHTML = contentHTML;
        
    }
    ))
}

getPersonajes()