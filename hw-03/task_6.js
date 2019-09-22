'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1300, quantity: 6 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(arr, productName) {
  let totalPrice = 0;
  for (const singleObject of arr) {
    if (singleObject.name === productName) {
      totalPrice += singleObject.price * singleObject.quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800
