const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar-main');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');

    menuBtn.classList.toggle('open');
});

const headerin = document.querySelector('.header-inhalt'); 

const Kontakttext = [
    "Hallo du Held,",
    "Hab keine Angst,",
    "Das Böse erwartet dich,",
    "auf der Suche nach dem Teufel,"
];

document.querySelector('.kontakt-animation-text').innerHTML = Kontakttext.join(' ');