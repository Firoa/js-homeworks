'use strict';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const parrentNode = document.querySelector('body');
parrentNode.style.backgroundColor = '#2196F3';
let indervalId = null;
parrentNode.addEventListener('click', ({ target }) => {
  if (target.dataset.action === 'start' && indervalId === null) {
    indervalId = setInterval(() => {
      parrentNode.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }
  if (target.dataset.action === 'stop') {
    clearInterval(indervalId);
    indervalId = null;
  }
});
