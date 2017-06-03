// https://leetcode.com/problems/ugly-number/#/description

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) return false;
  var factors;
  while (num > 1) {
    if (num % 2 === 0) {
      factors = 2;
    } else if (num % 3 === 0) {
      factors = 3;
    } else if (num % 5 === 0) {
      factors = 5;
    } else {
      return false;
    }
    num = Math.floor(num / factors);
  }
  return num === 1;
};

for (let i = 0; i < 100; i++) {
  if (isUgly(i)) console.log(i);
}