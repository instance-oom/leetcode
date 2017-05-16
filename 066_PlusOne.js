// https://leetcode.com/problems/plus-one/#/description

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var length = digits.length;
  var needCarry = true;
  for (var i = length - 1; i >= 0; i--) {
    if (needCarry) {
      digits[i] += 1;
    }
    if (digits[i] > 9) {
      needCarry = true;
      digits[i] = digits[i] % 10;
    } else {
      needCarry = false;
    }
  }
  if (needCarry) {
    digits.unshift(1);
  }
  return digits;
};

var nums = [1, 2, 3, 5];
console.log(plusOne(nums));

var nums = [0];
console.log(plusOne(nums));

var nums = [1, 2, 3, 9];
console.log(plusOne(nums));

var nums = [1, 9, 3, 9];
console.log(plusOne(nums));

var nums = [9, 9, 9, 9];
console.log(plusOne(nums));