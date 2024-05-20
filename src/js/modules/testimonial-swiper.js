import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const testimonialSwiper = () => {

    const swiper = new Swiper(".testimonial__container", {
        effect: "coverflow",
        grabCursor: true,
        initialSlide: 1,

        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: -25,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
    });
}