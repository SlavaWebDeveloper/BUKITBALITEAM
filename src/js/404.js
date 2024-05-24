import '@/scss/index-404.scss';

import mobileNav from './modules/mobile-nav';
import blurHeader from './modules/blurHeader';
import toggleDarkMode from './modules/toggleDarkMode';
import scrollRevealAnimation from './modules/scrollRevealAnimation';


const init = () => {
    mobileNav();
    blurHeader();
    toggleDarkMode();
    scrollRevealAnimation();
};

init();