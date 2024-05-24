import 'swiper/css/bundle';
import '@/scss/index.scss';

import { form } from './modules/form';
import mobileNav from './modules/mobile-nav';
import blurHeader from './modules/blurHeader';

import { heroSwiper } from './modules/hero-swiper';
import { testimonialSwiper } from './modules/testimonial-swiper';
import toggleDarkMode from './modules/toggleDarkMode';
import scrollUp from './modules/scrollUp';
import scrollRevealAnimation from './modules/scrollRevealAnimation';

const init = () => {
  form();
  mobileNav();
  blurHeader();
  heroSwiper();
  testimonialSwiper();
  toggleDarkMode();
  scrollUp();
  scrollRevealAnimation();
};

init();

