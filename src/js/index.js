import swiperModule from "./modules/swiperModule";

swiperModule();

// BURGER MENU
var burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  document.querySelector('.header__wrapper').classList.toggle('mobile-active');
  document.body.classList.toggle('overflow-hidden');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('burger-menu--active');
      document.querySelector('.header__wrapper').classList.remove('mobile-active');
      document.body.classList.remove('overflow-hidden');
    });
  });
});

document.querySelectorAll('.header__nav-item').forEach(navItem => {
  navItem.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    burgerMenu.classList.remove('burger-menu--active');
    document.querySelector('.header__wrapper').classList.remove('mobile-active');
  });
});