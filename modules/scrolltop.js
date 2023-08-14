
const logo = document.querySelector('.logo')
const scrollNumber = ()=> document.documentElement.scrollTop || document.body.scrollTop

const scrollTop = () => {
    if(document.querySelector('#experiencia')){
        let header = document.querySelector('header')
        header.classList.remove('scrolled')
        if(scrollNumber() > 0){
            requestAnimationFrame(scrollTop)
            scrollTo(0, scrollNumber() - (scrollNumber()/15))
        }
    
        logo.addEventListener('click', scrollTop)
    }
   
}

export default{
    logo,
    scrollNumber,
    scrollTop
}