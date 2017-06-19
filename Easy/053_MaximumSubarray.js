// https://leetcode.com/problems/maximum-subarray/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var sum = nums[0];
  var temp = sum;
  for (var i = 1; i < nums.length; i++) {
    if (temp < 0) temp = 0;
    temp += nums[i];
    if (sum < temp) sum = temp;
  }
  return sum;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));