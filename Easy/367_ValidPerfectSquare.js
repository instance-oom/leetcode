// https://leetcode.com/problems/valid-perfect-square/#/description

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 1) return false;
  if (num === 1) return true;
  var max = Math.floor(num / 2);
  for (var i = 1; i <= max; i++) {
    var value = i * i;
    if (value === num) return true;
    if (value > num) return false;
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1000000));