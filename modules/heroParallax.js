// parallax de el background de #hero Section

function heroParallax(){
    document.addEventListener('scroll',()=>{
        let hero = document.querySelector('#hero');
        let pos = window.pageYOffset;
            if(pos < 528){
                hero.style.backgroundPositionY = `${pos * 0.7}px`;
            }
    })
}

export default heroParallax