// Cambio el estilo del header al scrollear
const header = document.querySelector('header')

function scrollEvent(){
    document.addEventListener('scroll', ()=> {
        let scrollPos = window.pageYOffset;
        if(scrollPos > 0){
            header.classList.add('scrolled');
        }else{
            header.classList.remove('scrolled');
        }
    })
}

export default{
    header,
    scrollEvent
}