/*=============== CHANGE BACKGROUND HEADER ===============*/

export const blurHeader = () => {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50 ? header.classList.add('blur-header')
      : header.classList.remove('blur-header');
  });
}