// https://leetcode.com/problems/count-numbers-with-unique-digits/description/

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n == 0) return 1;
  var result = 10;
  var count = 9;
  for (var i = 2; i <= n; i++) {
    count *= (11 - i);
    result += count;
  }
  return result;
};

console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(10));