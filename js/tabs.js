const popcorn = document.querySelectorAll('.popcorn__list');
const snacks = document.querySelectorAll('.snacks__list');
const corn = document.querySelectorAll('.corn__list');
const buds = document.querySelectorAll('.buds__list');
const syharyky = document.querySelectorAll('.suharyky__list');
console.log(syharyky);

const bambuk = document.querySelectorAll('.bambuc__list');
console.log(bambuk)

const allButton = document.querySelector('.all');
const popcornButton = document.querySelector('.popcorn');
const snacksButton = document.querySelector('.snacks');
const cornButton = document.querySelector('.corn');
const budsButton = document.querySelector('.buds');
const bambucButton = document.querySelector('.bambuc');
const suharykyButton = document.querySelector('.suharyky');
console.log(bambucButton);
console.log(suharykyButton)

const handleClickPopcorn = () =>{
  popcorn.forEach(popcornItem => popcornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
   
}

const handleClickSnacks = () =>{
  snacks.forEach(snack => snack.classList.remove('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
  
}

const handleClickCorn = () =>{
  corn.forEach(cornItem => cornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
  
}

const handleClickBuds = () =>{
  buds.forEach(bud => bud.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
}

const handleClickSyharyky = ()=>{
  buds.forEach(bud => bud.classList.add('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.remove('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
}

const handleClickBambuc =()=>{
  buds.forEach(bud => bud.classList.add('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.remove('not-active'));
}
const handleClickAll = () =>{
  popcorn.forEach(popcornItem => popcornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.remove('not-active'));
  corn.forEach(cornItem => cornItem.classList.remove('not-active'));
  buds.forEach(bud => bud.classList.remove('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.remove('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.remove('not-active'));
}




popcornButton.addEventListener("click", handleClickPopcorn);
snacksButton.addEventListener("click", handleClickSnacks);
cornButton.addEventListener("click", handleClickCorn);
budsButton.addEventListener("click", handleClickBuds);
suharykyButton.addEventListener("click", handleClickSyharyky);
bambucButton.addEventListener("click", handleClickBambuc);
allButton.addEventListener("click", handleClickAll);