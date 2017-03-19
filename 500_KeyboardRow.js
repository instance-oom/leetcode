// https://leetcode.com/problems/keyboard-row/?tab=Description

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  if (!words || !words.length) return [];
  var row1 = /^[qwertyuiop]*$/i;
  var row2 = /^[asdfghjkl]*$/i;
  var row3 = /^[zxcvbnm]*$/i;
  var temp = [];
  var length = words.length;
  for (let i = 0; i < length; i++) {
    if (row1.test(words[i])) {
      temp.push(words[i]);
      continue;
    }
    if (row2.test(words[i])) {
      temp.push(words[i]);
      continue;
    }
    if (row3.test(words[i])) {
      temp.push(words[i]);
      continue;
    }
  }
  return temp;
};

var arr = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(arr));