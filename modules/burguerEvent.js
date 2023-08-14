// Eventos On Click del menú hamburguesa

const burger = document.querySelector('.burger-container')
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('nav a');

function burgerOnClick(){
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('active')
        burger.classList.toggle('clicked')
    })
}

function navLinkClick(){
    navLinks.forEach(link => {
        link.addEventListener('click', () =>{
            burger.classList.remove('clicked');
            nav.classList.remove('active');
        })
    })
}

export default{
    burger,
    nav,
    navLinks,
    burgerOnClick,
    navLinkClick
}
