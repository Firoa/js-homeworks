'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let usreLogin;

const isLoginValid = function(login) {
  console.log(login.length);
  if (4 <= login.length && login.length <= 16) {
    return true;
  } else return false;
};

const isLoginUnique = function(allLogins, login) {
  const arr = Array.from(allLogins);
  if (arr.includes(login)) {
    return false;
  } else return true;
};

// usreLogin = prompt('Введіть логін');
const addLogin = function(allLogins, login) {
  const isValid = isLoginValid(login);
  console.log('isValid', isValid);
  let message;
  if (isValid) {
    const isFree = isLoginUnique(allLogins, login);
    if (isFree) {
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
