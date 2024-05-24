import ScrollReveal from 'scrollreveal';

function scrollRevealAnimation() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true,
  })

  sr.reveal(`.section__title, .footer__container `);
  sr.reveal(`.section__subtitle`, { delay: 400 });
  sr.reveal(`.about-us__content, .contact-form`, { origin: 'rigth', delay: 500 });
  sr.reveal(`.about-us__banner-inner, .contact-info`, { origin: 'left', delay: 500 });
  sr.reveal(`.about-us__img-absolite`, { origin: 'left', delay: 600 });

  sr.reveal(`.catalog-card, .footer__column`, { delay: 400, interval: 100 });
  sr.reveal(`.call__title`, { origin: 'left', delay: 200 });
  sr.reveal(`.call__subtitle`, { origin: 'left', delay: 400 });
  sr.reveal(`.call__button`, { origin: 'rigth', delay: 200 });
  // sr.reveal(`.call__subtitle`, { origin: 'rigth', delay: 400 });

}

export default scrollRevealAnimation;