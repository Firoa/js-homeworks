'use strict';
let credits = 23580;
const pricePerDroid = 3000;
let droidsQuantity;
let totalPrice;
let message;

droidsQuantity = prompt('Скільки дроїдів хочете купити?');

if (droidsQuantity === null) {
  message = 'Відмінено користувачем!';
} else {
  totalPrice = droidsQuantity * pricePerDroid;
  if (credits < totalPrice) {
    message = 'Недостатньо коштів на рахунку!';
  } else {
    credits = credits - totalPrice;
    message = `Ви купили ${droidsQuantity} дроїдів, на рахунку залишилося ${credits} кредитів`;
  }
}

alert(message);
