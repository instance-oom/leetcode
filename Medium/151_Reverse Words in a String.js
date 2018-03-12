// https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
  if (!str) return str;
  let result = '';
  let tempStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      tempStr += str[i];
    } else {
      if (tempStr) {
        result = tempStr + ' ' + result;
      }
      tempStr = '';
    }
  }
  if (tempStr) {
    result = tempStr + ' ' + result;
  }
  if (result[result.length - 1] === ' ') {
    result = result.substr(0, result.length - 1);
  }
  return result;
};

let str = "  the sky is blue";
console.log(JSON.stringify(reverseWords(str)));
console.log(JSON.stringify(reverseWords('             ')));
console.log(JSON.stringify(reverseWords('a')));