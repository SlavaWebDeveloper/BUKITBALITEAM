import 'swiper/css/bundle';
import '@/scss/index.scss';
import { form } from './modules/form';
import mobileNav from './modules/mobile-nav';
import blurHeader from './modules/blurHeader';
import { heroSwiper } from './modules/hero-swiper';



// import swiperHero from './modules/hero-swiper';

const init = () => {
  form();
  mobileNav();
  blurHeader();
  heroSwiper();
  
};

init();
