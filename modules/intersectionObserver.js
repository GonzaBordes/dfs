const intersectionObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting && !entry.target.classList.contains('active')){
            entry.target.classList.add('active');
            // observer.unobserve(entry.target);
            console.log('triggered');
        }else{
            entry.target.classList.remove('active');
        }
    })
},{threshold: 0});

export default intersectionObserver
