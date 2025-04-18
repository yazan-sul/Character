const lightIcon = document.querySelector('.header-img');
const body = document.body;

lightIcon.addEventListener('click', () => {
    const isDark = body.classList.toggle('darkMode');

    lightIcon.src = isDark ? 'img/lightmode.png' : 'img/darkMode.png';
});
