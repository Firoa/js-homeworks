'use strict';
function formatString(string) {
  if (string.length > 40) {
    const res = Array.from(string);
    res.splice(36, string.length - 36, '.', '.', '.');
    string = res.join('');
  }
  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
