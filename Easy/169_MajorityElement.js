// https://leetcode.com/problems/majority-element/?tab=Description

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var temp = {};
  var length = nums.length;
  var limit = length / 2;
  var result;
  for (var i = 0; i < nums.length; i++) {
    if (!temp[nums[i]]) temp[nums[i]] = 0;
    temp[nums[i]]++;
    if (temp[nums[i]] > limit) {
      result = nums[i];
      break;
    };
  }
  return result;
};

var nums = [1, 2, 3, 2, 4, 2, 2];
console.log(majorityElement(nums));