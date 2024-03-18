// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

function swiperModule() {
    var swiper = new Swiper('.hero__slider-wrapper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      
        pagination: {
          el: '.slide__pagination',
          clickable: true,
          bulletActiveClass: 'hero-dotts--active',
          bulletClass: 'hero-dotts'
        },
        navigation: {
          nextEl: '.slide__next',
        },
    });
      
    var swiperTrending = new Swiper(".trending-slider__wrapper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        },
    breakpoints: {
        480: {
        slidesPerView: 1,
        spaceBetween: 24,
        },
        720: {
        slidesPerView: 2,
        spaceBetween: 24,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 24,
        },
        1080: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
        1200: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
        1401: {
        slidesPerView: 4,
        spaceBetween: 24,
        }
    }
    });
}

export default swiperModule;