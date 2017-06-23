// https://leetcode.com/problems/nth-digit/#/description

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  var digits = 1;
  var length = 9;
  var beginNum = 1;

  while (n > (length * digits)) {
    n = n - length * digits;
    digits++;
    length = length * 10;
    beginNum = beginNum * 10;
  }

  beginNum += (n - 1) / digits;
  var index = (n - 1) % digits;
  return (beginNum + '')[index] - 0;
};

console.log(findNthDigit(3));
console.log(findNthDigit(11));
console.log(findNthDigit(100000000));