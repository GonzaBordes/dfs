export default function startAnimation(){
    setTimeout(() => {
        const splash = document.querySelector('.splash')
        // const main = document.querySelector('main')
           splash.classList.remove('active')
        //    main.classList.add('active')
    }, 3000);
} 
