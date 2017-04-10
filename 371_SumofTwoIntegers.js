// https://leetcode.com/problems/sum-of-two-integers/?tab=Description

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  var sum = a ^ b;
  var carry = (a & b) << 1;
  if (carry !== 0) {
    sum = getSum(sum, carry);
  }
  return sum;
};

console.log(`1+2=${getSum(1, 2)}`);
console.log(`100+234=${getSum(100, 234)}`);