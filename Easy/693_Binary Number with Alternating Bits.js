// https://leetcode.com/problems/binary-number-with-alternating-bits/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  var str = n.toString(2);
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(10));
console.log(hasAlternatingBits(11));