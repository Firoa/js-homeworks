'use strict';
const inputSection = document.querySelector('#validation-input');
inputSection.addEventListener('blur', ({ target }) => {
  if (target.value.length > target.dataset.length) {
    target.classList.remove('invalid');
    target.classList.add('valid');
  } else {
    target.classList.remove('valid');
    target.classList.add('invalid');
  }
});

inputSection.addEventListener('focus', ({ target }) => {
  target.classList.contains('invalid') && target.classList.remove('invalid');
  target.classList.contains('valid') && target.classList.remove('valid');
});
