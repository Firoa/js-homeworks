'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userPassword;

userPassword = prompt('Введіть пароль');

if (userPassword === null) {
  message = 'Відмінено користувачем';
} else if (userPassword === ADMIN_PASSWORD) {
  message = 'Ласкаво просимо';
} else {
  message = 'Доступ заборонено, хибний пароль';
}

alert(message);
