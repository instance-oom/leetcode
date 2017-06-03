// https://leetcode.com/problems/reverse-string/?tab=Description

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  var result = [];
  for (var i = 0; i < s.length; i++) {
    result.push(s[i]);
  }
  return result.reverse().join('');
};

var str = 'hello, leetcode';
console.log(`${str} reverse to ${reverseString(str)}`);