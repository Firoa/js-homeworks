'use strict';
const formatString = function(string, value = 40) {
  return string.length > value
    ? (string = `${string.slice(0, 40 - 4)}...`)
    : string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
