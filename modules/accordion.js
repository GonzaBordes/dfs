
const enviosh2 = document.querySelectorAll('.accordions  h3')

function accordion (){
    enviosh2.forEach(h => {
        h.addEventListener('click', ()=>{
            let content = (h.parentElement);
            content.classList.toggle('show');
        })    
    });
}

export default{
    enviosh2,
    accordion
}