'use strict';

const categories = document.querySelector('#categories');
const countOfChildrens = categories.children.length;
console.log('Count of categories:', countOfChildrens);
const childrens = categories.children;
const CategoryViver = ([...childrens]) => {
  childrens.forEach(child => {
    console.log('Category:', child.firstElementChild.textContent);
    console.log('Count of elements:', child.querySelectorAll('li').length);
    return 0;
  });
};
CategoryViver(childrens);
