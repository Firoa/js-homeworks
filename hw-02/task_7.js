'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let usreLogin;

const isLoginValid = login => 4 <= login.length && login.length <= 16;
const isLoginUnique = (allLogins, login) => allLogins.includes(login);

// usreLogin = prompt('Введіть логін');
const addLogin = function(allLogins, login) {
  let message;
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      message = 'Логін вдало доданий';
    } else {
      message = 'Такий логін вже використовується';
    }
  } else {
    message = 'Помилка! Логін повиненн бути від 4 до 16 символів';
  }
  return message;
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
