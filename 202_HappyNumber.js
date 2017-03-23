// https://leetcode.com/problems/happy-number/#/description

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n < 1) return false;
  var duplicate = {};
  var sum;
  while (true) {
    sum = 0;
    while (n) {
      sum += ((n % 10) * (n % 10));
      n = Math.floor(n / 10);
    }
    if (sum === 1) return true;
    if (duplicate[sum]) return false;
    duplicate[sum] = true;
    n = sum;
  }
};
console.log(`19 => ${isHappy(19)}`);
console.log(`28 => ${isHappy(28)}`);
console.log(`37 => ${isHappy(37)}`);