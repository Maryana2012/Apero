const currentPage = window.location.pathname;
const pointCurrentPage = "." + currentPage;
const navLinks = document.querySelectorAll('.nav__link');
// console.log(navLinks);
// console.log(currentPage)

navLinks.forEach(link => {
    // console.log(link)
    if (link.getAttribute('href') === pointCurrentPage){
        link.classList.add('active__link')
    }
} )

// navLinks.forEach(link => {
//     // console.log(link)
//     // if (link.getAttribute('href') === currentPage){
//        console.log(link.getAttribute('href'))
//        console.log(currentPage)
//         // link.classList.add('active__link')
//     // }
// } )