// https://leetcode.com/problems/maximum-average-subarray-i/#/description

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  var len = nums.length;
  var sum = 0;
  var i = 0;
  for (i; i < k; i++) {
    sum += nums[i];
  }
  var maxSum = sum;
  for (i; i < len; i++) {
    sum = sum - nums[i - k] + nums[i];
    if (maxSum < sum) maxSum = sum;
  }
  return maxSum / k;
};

var nums = [1, 12, -5, -6, 50, 3];
var k = 4;
console.log(findMaxAverage(nums, k));

var k = 2;
console.log(findMaxAverage(nums, k));