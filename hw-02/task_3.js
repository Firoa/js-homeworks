'use strict';
function findLongestWord(string) {
  let longestWord;
  const wordsArray = string.split(' ');
  let max = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= max) {
      max = wordsArray[i].length;
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
//
