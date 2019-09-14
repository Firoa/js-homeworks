// 'use strict';
let total = 0;
let input;
let numbers = [];

while (input !== null) {
  input = prompt('Введіть число');
  if (input === null) {
    break;
  }
  input = Number(input);
  const isNaN = Number.isNaN(input);
  // console.log(isNaN);
  if (isNaN) {
    alert('Було введено не число, спробуйте ще раз');
  } else {
    numbers.push(input);
  }
}
// console.log(numbers);
for (let r = 0; r < numbers.length; r++) {
  total = total + numbers[r];
}
alert(`Сума ${total}`);
