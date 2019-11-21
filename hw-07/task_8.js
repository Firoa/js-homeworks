'use strict';
const getRandom255 = () => Math.floor(Math.random() * Math.floor(255));
const divBoxes = document.createElement('div');
const task8 = document.querySelector('#task-8');
divBoxes.classList.add('boxes');
task8.appendChild(divBoxes);

const createBoxes = amount => {
  const arr = [];
  arr.length = amount;
  const res = [...arr].reduce((acc, element, index) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = 30 + 10 * index + 'px';
    box.style.height = 30 + 10 * index + 'px';
    box.style.backgroundColor = `rgb(${getRandom255()}, ${getRandom255()}, ${getRandom255()})`;
    acc = [...acc, box];
    return acc;
  }, []);
  return res;
};
divBoxes.append(...createBoxes(10));
