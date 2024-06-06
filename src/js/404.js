import '@/scss/index-404.scss';

import "@/scss/normalize.scss";
import "@/scss/common.scss"

import { mobileNav } from './modules/mobile-nav';
import { blurHeader } from './modules/blurHeader';
import { toggleDarkMode } from './modules/toggleDarkMode';
import { scrollRevealAnimation } from './modules/scrollRevealAnimation';
import { scrollUp } from './modules/scrollUp';


const init = () => {
    mobileNav();
    blurHeader();
    toggleDarkMode();
    scrollRevealAnimation();
    scrollUp();
};

init();