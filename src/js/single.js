import "@/scss/normalize.scss";
import "@/scss/common.scss"

import '@/scss/index-single.scss';

import { scrollRevealAnimation } from "./modules/scrollRevealAnimation";
import { mobileNav } from './modules/mobile-nav';
import { blurHeader } from './modules/blurHeader';
import { toggleDarkMode } from './modules/toggleDarkMode';

import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import { Carousel, Fancybox } from "@fancyapps/ui";
import { scrollUp } from './modules/scrollUp';



const container = document.getElementById("myCarousel");
const options = {
  Dots: false,
  Thumbs: {
    type: "modern",
  },
};

new Carousel(container, options, { Thumbs });

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  idle: false,
  animated: false,
  showClass: false,
  hideClass: false,
  dragToClose: false,
  Images: {
    zoom: false,
  },
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },
  Thumbs: {
    type: 'classic',
  },
  Carousel: {
    Navigation: false,
  },
});

const init = () => {
  mobileNav();
  blurHeader();
  toggleDarkMode();
  scrollRevealAnimation();
  scrollUp();
};

init();