import ScrollReveal from 'scrollreveal';

export const scrollRevealAnimation = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
  })

  sr.reveal(`.section__title, .footer__container, .single-card__content-description`);
  sr.reveal(`.section__subtitle, .catalog__button`, { delay: 400 });
  sr.reveal(`.about-us__content, .contact-form, .catalog-card__price`, { origin: 'rigth', delay: 500 });
  sr.reveal(`.about-us__banner-inner, .contact-info, .button.single-card__button`, { origin: 'left', delay: 500 });
  sr.reveal(`.about-us__img-absolite`, { origin: 'left', delay: 600 });
  sr.reveal(`.error__button`, { origin: 'bottom', delay: 600 });

  sr.reveal(`.catalog-card, .footer__column, .single-card__specifications-col`, { delay: 400, interval: 100 });
  sr.reveal(`.call__title, .single-card__wrapper-gallery`, { origin: 'left', delay: 200 });
  sr.reveal(`.call__subtitle`, { origin: 'left', delay: 400 });
  sr.reveal(`.call__button`, { origin: 'rigth', delay: 200 });
}