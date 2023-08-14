const categoriasSwiper = new Swiper('.swiper.categorias', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup:1,
    speed: 600,
    draggable: true,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        560:{
            slidesPerView: 2,
            speed: 800
        },
        760:{
            slidesPerView: 2,
            speed: 800
        },
        920:{
            slidesPerView:4,
            speed: 800
        }
    }
  });


  const experienciaSwiper = new Swiper('.swiper.experiencia', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    slidesPerGroup:1,
    speed: 600,
    draggable: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        560:{
            slidesPerView: 2,
            speed: 800
        },
        760:{
            slidesPerView: 2,
            speed: 800
        },
        920:{
            slidesPerView:4,
            speed: 800
        }
    }
  });

  const clientesSwiper = new Swiper('.swiper.clientes', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup:1,
    speed: 600,
    draggable: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        760:{
            slidesPerView:2
            
        },
        920:{
            slidesPerView: 3            
        }
    }
  });

  export default{
      clientesSwiper,
      categoriasSwiper,
      experienciaSwiper
  }