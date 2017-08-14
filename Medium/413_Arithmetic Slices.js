// https://leetcode.com/problems/arithmetic-slices/description/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  var len = A.length;
  if (len < 3) return 0;
  var subs = [];
  for (var i = 1; i < len; i++) {
    subs[i - 1] = A[i] - A[i - 1];
  }
  var result = 0;
  var tempCount = 1;
  for (var j = 1; j < len - 1; j++) {
    if (subs[j] === subs[j - 1]) {
      tempCount++;
    } else {
      if (tempCount > 1) {
        if (tempCount == 2) result += 1;
        else {
          var temp = ((tempCount + 1) * (tempCount - 1)) - ((tempCount * (tempCount + 1) / 2) - 1);
          result += temp;
        }
      }
      tempCount = 1;
    }
  }
  if (tempCount > 1) {
    var temp = ((tempCount + 1) * (tempCount - 1)) - ((tempCount * (tempCount + 1) / 2) - 1);
    result += temp;
  }
  return result;
};

var nums = [1, 3, 5, 7, 9];
console.log(numberOfArithmeticSlices(nums));

var nums = [1, 2, 3, 4];
console.log(numberOfArithmeticSlices(nums));

var nums = [1, 2, 3, 4, 7]
console.log(numberOfArithmeticSlices(nums));

var nums = [1, 1, 1, 1];
console.log(numberOfArithmeticSlices(nums));

var nums = [1, 2, 3];
console.log(numberOfArithmeticSlices(nums));