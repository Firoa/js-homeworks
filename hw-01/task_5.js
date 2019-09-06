'use strict';
const countries = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка'];
const price = [100, 250, 170, 80, 120];
let i;
let userCountry;
let message;

countries;
userCountry = prompt('Укажите страну доставаки:').toLocaleLowerCase();
console.log(userCountry);
switch (userCountry) {
  case countries[0].toLocaleLowerCase():
    i = 0;
    message = `Доставка в ${countries[i]} , будет стоить ${price[i]} кредитов`;
    break;
  case countries[1].toLocaleLowerCase():
    i = 1;
    message = `Доставка в ${countries[i]} , будет стоить ${price[i]} кредитов`;
    break;
  case countries[2].toLocaleLowerCase():
    i = 2;
    message = `Доставка в ${countries[i]} , будет стоить ${price[i]} кредитов`;
    break;
  case countries[3].toLocaleLowerCase():
    i = 3;
    message = `Доставка в ${countries[i]} , будет стоить ${price[i]} кредитов`;
    break;
  case countries[4].toLocaleLowerCase():
    i = 4;
    message = `Доставка в ${countries[i]} , будет стоить ${price[i]} кредитов`;
    break;
  default:
    message = 'В вашей стране доставка не доступна!';
}
alert(message);
