let actual = localStorage.getItem('mode')

function loadMode(){

    if(!actual){
        actual = 'light';
        setToLight()
    }
    else if(actual === 'dark'){
        setToDark()
    }
    else{
        setToLight()
    }
}


function setToDark(){
    const toDarkModeBtn = document.getElementById('toDarkMode')
    const toLightModeBtn = document.getElementById('toLightMode')
    const header = document.getElementById('header')
    const content = document.getElementById('content')

    toDarkModeBtn.classList.add('hidden')
    toLightModeBtn.classList.remove('hidden')

    header.classList.add('dark')
    content.classList.add('dark')

    localStorage.setItem('mode','dark')


}

function setToLight(){
    const toDarkModeBtn = document.getElementById('toDarkMode')
    const toLightModeBtn = document.getElementById('toLightMode')
    const header = document.getElementById('header')
    const content = document.getElementById('content')

    toLightModeBtn.classList.add('hidden')
    toDarkModeBtn.classList.remove('hidden')

    header.classList.remove('dark')
    content.classList.remove('dark')

    localStorage.setItem('mode','light')
}

function programarModeBtn(){
    const toDarkModeBtn = document.getElementById('toDarkMode')
    const toLightModeBtn = document.getElementById('toLightMode')

    toDarkModeBtn.addEventListener('click', ()=>{
        setToDark()
    })
    toLightModeBtn.addEventListener('click', ()=>{
        setToLight()
    })
}


function iniciar() {
    loadMode()
    programarModeBtn()
}

iniciar()