import '@/scss/index.scss';
import { form } from './modules/form';
import mobileNav from './modules/mobile-nav';
import blurHeader from './modules/blurHeader';

const init = () => {
  form();
  mobileNav();
  blurHeader();
};

init();