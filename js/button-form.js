
// (() => {
//     const refs = {
//       openModalBtn: document.querySelectorAll("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
//     //  console.log(refs)
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
    // function toggleModal() {
    //   refs.modal.classList.toggle("is-hidden");
    // }
//   })();

const openModalBtn = document.querySelectorAll('.modal-open');
const closeModalBtn = document.querySelector('.modal-close');
const modal = document.querySelector('.backdrop');

closeModalBtn.addEventListener("click", toggleModal);
openModalBtn.forEach(button=> button.addEventListener("click",
  (event=>{
    const clickedButton = event.currentTarget;
    
    if(clickedButton){
      toggleModal();
    }
  
  })
))

function toggleModal() {
  modal.classList.toggle("is-hidden");
}
