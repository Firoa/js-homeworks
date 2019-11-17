'use strict';
const sizeControler = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
sizeControler.addEventListener('mousemove', ({ target }) => {
  text.style.fontSize = target.value + 'px';
});
