'use strict';

function calculateEngravingPrice(message, pricePerWord) {
  const messageWordsArray = message.split(' ');
  const engravingPrice = messageWordsArray.length * pricePerWord;
  return engravingPrice;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
