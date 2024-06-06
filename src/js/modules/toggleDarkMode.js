export const toggleDarkMode = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navMenu = document.querySelector('#nav-menu');

    if (darkModeToggle) {
        // Initialize the dark mode state based on localStorage
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.checked = false;
        }

        darkModeToggle.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode', darkModeToggle.checked);
            localStorage.setItem('dark-mode', darkModeToggle.checked);

            if (navMenu.closest('.show-menu')) {
                console.log('navMenu: ', navMenu);
                navMenu.classList.remove('show-menu')
            }
        });
    }
}