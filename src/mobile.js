let btnMenu = document.getElementById('btn-menu')
let menuz = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menumobile')

btnMenu.addEventListener('click',()=>{
    menuz.classList.add('abrir-menu')
})

menuz.addEventListener('click',()=>{
    menuz.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menuz.classList.remove('abrir-menu')
})