// https://leetcode.com/problems/longest-palindrome/#/description

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var length = s.length;
  if (length <= 1) return length;
  var obj = {};
  for (var i = 0; i < length; i++) {
    if (!obj[s[i]]) obj[s[i]] = 0;
    obj[s[i]]++;
  }
  var result = 0;
  for (var key in obj) {
    var num = obj[key];
    if (num % 2 === 0) {
      result += obj[key];
    } else {
      result += (obj[key] - 1);
    }
  }
  if (result < length) result++;
  return result;
};

console.log(longestPalindrome('a'));
console.log(longestPalindrome('ab'));
console.log(longestPalindrome('abccccdd'));
console.log(longestPalindrome('abbbaccg'));