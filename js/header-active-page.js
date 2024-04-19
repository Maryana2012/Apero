const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage){
        link.classList.add('active__link')
    }
} )