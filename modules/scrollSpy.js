// SCROLLSPY CON INTERSECTION OBSERVER
const scrollSpyObserver = new IntersectionObserver((entries) =>{
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      const navLinks= document.querySelectorAll('a')

      navLinks.forEach(link => {
        if(link.getAttribute("href") !== id){
          link.classList.remove("active")
        }
      });

      document.querySelector(`a[href="#${id}"]`).classList.add('active');
    }else{
      const id = entry.target.getAttribute('id');
      document.querySelector(`a[href="#${id}"]`).classList.remove('active');
    }
  });

},{threshold: .25})


export default scrollSpyObserver