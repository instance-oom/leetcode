// https://leetcode.com/problems/power-of-two/#/description

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};

console.log(`1 => ${isPowerOfTwo(1)}`);
console.log(`4 => ${isPowerOfTwo(4)}`);
console.log(`1024 => ${isPowerOfTwo(1024)}`);
console.log(`12333 => ${isPowerOfTwo(12333)}`);