// https://leetcode.com/problems/missing-number/?tab=Description

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort(function (item1, item2) {
    return item1 - item2;
  });
  for (var i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};

var nums = [0, 1, 2, 3, 5, 6, 7, 8, 9];
console.log(missingNumber(nums));

nums = [0];
console.log(missingNumber(nums));