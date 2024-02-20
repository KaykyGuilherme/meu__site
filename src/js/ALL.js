// =======================================
// Menu hamburger mobile

const headerALL = {
    navALL: document.querySelector('nav'),
    btnMobile: document.querySelector('.menu__mobile'),
}

headerALL.btnMobile.addEventListener('click', () =>{
    headerALL.navALL.classList.toggle('nav__mobile__active')
})

// =======================================
// Maquina de escrever

const escritasSalva = ['Front-End', 'dev-game', 'mobile', 'full-stack']
let numeroEscrita = 0
const escrever = document.querySelector('.esrever')

const maquinaDeEscrever = () =>{
    
    escrever.textContent = ''
    const separarEscrita = escritasSalva[numeroEscrita].split('')
    
    separarEscrita.forEach((letra, numero) =>{
      
    })

    trocarEscrita()
}

maquinaDeEscrever()
