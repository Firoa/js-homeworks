'use strict';
let Generatedvalue = 0;
const valueOutput = document.querySelector('#value');
valueOutput.textContent = Generatedvalue;
document
  .querySelector("button[data-action='decrement']")
  .addEventListener('click', () => valueOutput.textContent--);
document
  .querySelector("button[data-action='increment']")
  .addEventListener('click', () => valueOutput.textContent++);
