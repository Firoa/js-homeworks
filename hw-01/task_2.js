'use strict';
const totalQuantity = 100;
let orderedQuantity;

orderedQuantity = 50;
// orderedQuantity = 120;
// orderedQuantity = 100;
if (totalQuantity >= orderedQuantity) {
  console.log("Замовлення оформлене, з вами зв'яжеться менеджер");
} else {
  console.log('На складі не достатньо товарів');
}
