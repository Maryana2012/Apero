const openMenuBtn = document.querySelector('.button__mobile__menu');
const closeMeuBtn = document.querySelector('.mobile__button-close');
const modal = document.querySelector('.backdrop__mobile');
console.log(modal)

openMenuBtn.addEventListener("click", toggleModal);
closeMeuBtn.addEventListener("click", toggleModal)


function toggleModal() {
    modal.classList.toggle("is-hidden");
  }