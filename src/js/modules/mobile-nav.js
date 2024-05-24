import toggleDarkMode from './toggleDarkMode';

/*=============== SHOW MENU ===============*/

function mobileNav() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const darkModeToggle = document.getElementById('darkModeToggle');

  /* Menu show */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  /* Menu hidden */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }


  toggleDarkMode();

}

export default mobileNav;