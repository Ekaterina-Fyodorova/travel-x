import locationHover from './modules/location-hover.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';

loader();
locationHover();
mobileNav();
// init Swiper:
const swiper = new Swiper('.swiper', {
    loop: true,
    parallax: true,
    speed: 1000,
    keyboard: {
        enabled: true,
    },
    // If we need pagination
    pagination: {
      el: '.slider-controls__count',
      type: 'fraction',
      formatFractionCurrent: (number) => '0' + number,
      formatFractionTotal: (number) => '0' + number,
    },
    // Navigation arrows
    navigation: {
      nextEl: '#slider-next',
      prevEl: '#slider-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
