'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parrentList = document.querySelector('#ingredients');
const createList = ingridients => {
  return ingridients.reduce((acc, element) => {
    const items = document.createElement('li');
    items.textContent = `${element}`;
    acc = [...acc, items];
    return acc;
  }, []);
};

parrentList.append(...createList(ingredients));
