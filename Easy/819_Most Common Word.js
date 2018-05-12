// https://leetcode.com/problems/most-common-word/description/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let splitChars = "!?',;. ";
  let words = {};
  let word = '';
  for (let i = 0; i < paragraph.length; i++) {
    let char = paragraph[i];
    if (splitChars.indexOf(char) === -1) {
      word += char.toLowerCase();
    } else {
      if (word && banned.indexOf(word) === -1) {
        words[word] = words[word] || 0;
        words[word]++;
      }
      word = '';
    }
  }
  let result = '';
  words[result] = -1;
  for (let key in words) {
    if (words[key] > words[result]) {
      result = key;
    }
  }
  return result || word;
};

var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
var banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));

var paragraph = "Bob";
var banned = [];
console.log(mostCommonWord(paragraph, banned));