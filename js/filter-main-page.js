const params = new URLSearchParams(window.location.search);
const filter = params.get('filter'); 

const popcorn = document.querySelectorAll('.popcorn__list');
const snacks = document.querySelectorAll('.snacks__list');
const corn = document.querySelectorAll('.corn__list');
const buds = document.querySelectorAll('.buds__list');
const syharyky = document.querySelectorAll('.suharyky__list');
const bambuk = document.querySelectorAll('.bambuc__list');

if (filter.includes('popcorn')){
    popcorn.forEach(popcornItem => popcornItem.classList.remove('not-active'));
    snacks.forEach(snack => snack.classList.add('not-active'));
    corn.forEach(cornItem => cornItem.classList.add('not-active'));
    buds.forEach(bud => bud.classList.add('not-active'));
    syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
    bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
}

if(filter.includes('sweet')){
    corn.forEach(cornItem => cornItem.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  buds.forEach(bud => bud.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
}
if(filter.includes('pods')){
    buds.forEach(bud => bud.classList.remove('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.add('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
}
if(filter.includes('syharyky')){
    buds.forEach(bud => bud.classList.add('not-active'));
  snacks.forEach(snack => snack.classList.add('not-active'));
  corn.forEach(cornItem => cornItem.classList.add('not-active'));
  popcorn.forEach(popcornItem => popcornItem.classList.add('not-active'));
  syharyky.forEach(syharyky=>syharyky.classList.remove('not-active'));
  bambuk.forEach(bambuk=>bambuk.classList.add('not-active'));
}