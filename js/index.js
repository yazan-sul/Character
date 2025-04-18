const lightIcon = document.querySelector('.header-img');
const body = document.body;

lightIcon.addEventListener('click', () =>{
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    lightIcon.src = isDark ?   'img/dark-theme.png' : 'img/lightmode.png';
});

