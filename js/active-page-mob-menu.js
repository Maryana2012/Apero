const mobileMenu = document.querySelectorAll('.menu__link');
const activePage = document.querySelector('.active__link')

if (activePage){
    const activeMobileMenu = mobileMenu.forEach(el=>{
        if(el.text.toLowerCase() === activePage.text.toLowerCase() ){
        el.remove();
        } 
    })

}

