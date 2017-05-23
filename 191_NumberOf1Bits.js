// https://leetcode.com/problems/number-of-1-bits/#/description

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).replace(/0/g, '').length;
};

// Better
var hammingWeight2 = function (n) {
  var count = 0;
  while (n) {
    if (n % 2 === 1) count++;
    n = Math.floor(n / 2);
  }
  return count;
};

console.log(hammingWeight(3));
console.log(hammingWeight(10));
console.log(hammingWeight(11));
console.log(hammingWeight(16));