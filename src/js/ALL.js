const headerALL = {
    navALL: document.querySelector('nav'),
    btnMobile: document.querySelector('.menu__mobile'),
}

headerALL.btnMobile.addEventListener('click', () =>{
    headerALL.navALL.classList.toggle('nav__mobile__active')
})