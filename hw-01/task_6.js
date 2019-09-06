'use strict';
let total = 0;
let step;
let i;
let b;

while (step !== null) {
  step = prompt('Введіть число');
  if (step !== null) {
    i = step;
    total = total + Number.parseInt(i);
  }
}
alert(`Сума ${total}`);
