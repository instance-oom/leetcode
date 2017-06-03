// https://leetcode.com/problems/array-partition-i/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  var length = nums.length;
  nums = nums.sort(function (num1, num2) {
    return num1 - num2;
  });
  var sum = 0;
  for (var i = 0; i < length; i += 2) {
    sum += nums[i];
  }
  return sum;
};