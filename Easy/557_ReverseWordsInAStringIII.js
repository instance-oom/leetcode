// https://leetcode.com/problems/reverse-words-in-a-string-iii/#/description

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s) return s;
  var length = s.length;
  var j = length - 1;
  var temp = '';
  var result = '';
  for (j; j >= 0; j--) {
    if (s[j] !== ' ')
      temp += s[j];
    if (s[j] === ' ' || j === 0) {
      result = result ? (temp + ' ' + result) : temp;
      temp = '';
    }
  }
  return result;
};

var s = "Let's take LeetCode contest";
console.log(reverseWords(s));
s = 'a';
console.log(reverseWords(s));