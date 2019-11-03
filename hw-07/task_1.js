'use strict';

const categories = document.querySelector('#categories');
const countOfChildrens = categories.children.length;
const childrens = categories.children;
const title = childrens[0].firstElementChild.textContent;
console.log('Count of categories:', countOfChildrens);
console.log('categories:', categories);
console.log(childrens);
console.log(title);

const tittleText = categories.querySelectorAll("h2");
const buf = [...tittleText];
console.log(buf.map(e=>e.textContent));
const getTitle = ([...lists]) => {
  console.log("List inside func:",lists);
   console.log(lists[0].firstElementChild.textContent);
  return lists.map(list => list.firstElementChild.textContent);
};
console.log(getTitle(childrens));
