// https://leetcode.com/problems/repeated-substring-pattern/#/description

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  var length = s.length;
  if (length < 2) return false;
  var mid = Math.floor(length / 2);
  var subStr = '';
  for (var i = 0; i < mid; i++) {
    subStr += s[i];
    if (i !== 0 && length % (i + 1) !== 0) continue;
    if (s.split(subStr).join('') === '') return true;
  }
  return false;
};

console.log(repeatedSubstringPattern('ab'));    // true
console.log(repeatedSubstringPattern('bb'));    // true
console.log(repeatedSubstringPattern('abab'));  // true
console.log(repeatedSubstringPattern('aba'));   // false
console.log(repeatedSubstringPattern('abcabcabcabc'));  // true
console.log(repeatedSubstringPattern('abaababaab'));