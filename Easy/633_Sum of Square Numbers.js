// https://leetcode.com/problems/sum-of-square-numbers/tabs/description

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  var max = Math.ceil(Math.sqrt(c));
  for (var i = 0; i <= max; i++) {
    var powB = c - Math.pow(i, 2);
    var b = Math.sqrt(powB);
    if (b === parseInt(b)) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(0));