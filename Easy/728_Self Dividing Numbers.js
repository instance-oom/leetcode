// https://leetcode.com/problems/self-dividing-numbers/description/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var result = [];
  for (var i = left; i <= right; i++) {
    if (i < 10) {
      result.push(i);
      continue;
    }

    var success = true;
    var temp = i;
    while (temp > 1) {
      var num = temp % 10;
      if (num === 0 || i % num !== 0) {
        success = false;
        break;
      }
      temp = Math.floor(temp / 10);
    }
    if (success) {
      result.push(i);
    }
  }
  return result;
};


console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(123, 354));