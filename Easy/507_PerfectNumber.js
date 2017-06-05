// https://leetcode.com/problems/perfect-number/#/description

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 1) return false;
  var sum = 1;
  var sqrt = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;
      sum += (num / i);
    }
  }
  return sum === num;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(100000000));
console.log(checkPerfectNumber(99999993));