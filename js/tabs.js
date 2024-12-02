const popcorn = document.querySelectorAll('.popcorn__list');
// console.log(popcorn)
const snacks = document.querySelectorAll('.snacks__list');
// console.log(snacks)
const corn = document.querySelectorAll('.corn__list');
// console.log(corn)
const buds = document.querySelectorAll('.buds__list');
// console.log(buds)


const allButton = document.querySelector('.all');
const popcornButton = document.querySelector('.popcorn');
const snacksButton = document.querySelector('.snacks');
const cornButton = document.querySelector('.corn');
const budsButton = document.querySelector('.buds');


const handleClickPopcorn = () =>{
  popcorn.forEach(popcornItem => popcornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
   
}

const handleClickSnacks = () =>{
  snacks.forEach(snack => snack.classList.remove('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
  
}

const handleClickCorn = () =>{
  corn.forEach(cornItem => cornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
  
}

const handleClickBuds = () =>{
  buds.forEach(bud => bud.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  
}

const handleClickAll = () =>{
  popcorn.forEach(popcornItem => popcornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.remove('not-active'));
  corn.forEach(cornItem => cornItem.classList.remove('not-active'));
  buds.forEach(bud => bud.classList.remove('not-active'));
  
}

popcornButton.addEventListener("click", handleClickPopcorn);
snacksButton.addEventListener("click", handleClickSnacks);
cornButton.addEventListener("click", handleClickCorn);
budsButton.addEventListener("click", handleClickBuds);
allButton.addEventListener("click", handleClickAll);