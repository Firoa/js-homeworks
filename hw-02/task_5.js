// 'use strict';
const checkForSpam = function(str) {
  str = str.toLowerCase();
  return str.includes('spam') || str.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
