import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

new Swiper('.mySwiper', {
  modules: [Navigation, Autoplay, EffectFade],
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
