// https://leetcode.com/problems/power-of-three/#/description

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n > 0 && 10460353203 % n === 0) return true;
  return false;
};

console.log(`0 => ${isPowerOfThree(0)}`);
console.log(`3 => ${isPowerOfThree(3)}`);
console.log(`10 => ${isPowerOfThree(10)}`);
console.log(`81 => ${isPowerOfThree(81)}`);