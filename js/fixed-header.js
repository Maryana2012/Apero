const header= document.querySelector('.header');
const headerLinks = document.querySelectorAll('.nav__link');
const headerButton = document.querySelector('.header__button');
const headerLogo = document.querySelector('.logo');
const headerLogoFixed = document.querySelector('.logo__fixed');
const headerIconMenu = document.querySelector('.icon__menu__mobile');


const fixedHeader = () =>{
    if(window.scrollY > 0){
        header.classList.add('header__second');
        headerLinks.forEach(link => {link.classList.add('nav__link-second')});
        headerButton.classList.add('header__button-second');
        headerLogo.classList.remove('.logo');
        headerLogo.classList.add('logo__fixed');
        headerLogoFixed.classList.remove('logo__fixed');
        headerLogoFixed.classList.add('logo');
        headerIconMenu.classList.add('icon__menu__mobile-second');
    } else { header.classList.remove('header__second') 
             headerLinks.forEach(link => {link.classList.remove('nav__link-second')});
             headerButton.classList.remove('header__button-second');
             headerLogo.classList.add('.logo');
             headerLogo.classList.remove('logo__fixed');
             headerLogoFixed.classList.add('logo__fixed');
             headerLogoFixed.classList.remove('logo');
             headerIconMenu.classList.remove('icon__menu__mobile-second');

}
}
window.addEventListener('scroll', fixedHeader)
