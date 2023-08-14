import splash from "./modules/splash-animation.js"
import burguerEvent from './modules/burguerEvent.js'
import heroParallax from './modules/heroParallax.js'
import headerScroll from './modules/headerScroll.js'
import scrolltoTop from "./modules/scrolltop.js"
import ScrollToAnchor from "./modules/scrolltoanchor.esm.js"
import accordion from "./modules/accordion.js"
import scrollSpyObserver from './modules/scrollSpy.js'
import intersectionObserver from "./modules/intersectionObserver.js"
import swipers from './modules/swiper-declarations.js'

splash()
burguerEvent.burgerOnClick()
burguerEvent.navLinkClick()
heroParallax()
headerScroll.scrollEvent()
scrolltoTop.scrollTop()
accordion.accordion()

const smoothScroll = new ScrollToAnchor({
    duration: 1500,
    offset: 40
})

// asigno elementos al intersection observer
const nosotrosFigure = document.querySelector('#nosotros figure')
const nosotrosContent = document.querySelector('#nosotros .content')
const saludableIcons = document.querySelectorAll('#saludable li')
const h2Array = document.querySelectorAll('h2')
const comprasUl = document.querySelector('#compra ul')
const compraLiArray = document.querySelectorAll('#compra li')
const crecerP = document.querySelector('#crecer p')
const crecerSpan = document.querySelector('#crecer .container > span')
const fadeUp = document.querySelectorAll('.fade-up')
const bodyLinkArray = document.querySelectorAll('.link-box')
const containers = document.querySelectorAll('.container')
const svgContainers= document.querySelectorAll('.svg-container')

fadeUp.forEach(el =>{
    intersectionObserver.observe(el)
})

containers.forEach(element => {
    intersectionObserver.observe(element)
})

if(document.querySelector('#categorias')){
    const sections = [
        document.querySelector('#hero'),
        document.querySelector('#contacto'),
        document.querySelector('#nosotros'),
        document.querySelector('#categorias'),
        document.querySelector('#quienes-somos')
    ]

    sections.forEach(section =>{
        scrollSpyObserver.observe(section)
    })
}else{
    const sections = [
        document.querySelector('#hero'),
        document.querySelector('#compra'),
        document.querySelector('#envios'),
        document.querySelector('#pago'),
    ]

     sections.forEach(section =>{
        scrollSpyObserver.observe(section)
    })
}

if(nosotrosFigure){
    intersectionObserver.observe(nosotrosFigure)
    intersectionObserver.observe(nosotrosContent)
    saludableIcons.forEach(icon => {
        intersectionObserver.observe(icon)    
    });
}

h2Array.forEach(h2 => {
    intersectionObserver.observe(h2)    
});

if(compraLiArray){
    compraLiArray.forEach(li => {
        intersectionObserver.observe(li)
    });
}

bodyLinkArray.forEach(link =>{
    intersectionObserver.observe(link)
})

if(svgContainers){
    svgContainers.forEach(svg =>{
        intersectionObserver.observe(svg)
    })
}

comprasUl ? intersectionObserver.observe(comprasUl) : 0
crecerSpan ? intersectionObserver.observe(crecerSpan) : 0
crecerSpan ? intersectionObserver.observe(crecerP) : 0




console.log(document.querySelector('#circle').getTotalLength())