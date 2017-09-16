// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0) return;
  var len = nums.length;
  var maxIndex = len - 1;
  k = k % len;
  var temp = [];
  for (var i = maxIndex, j = k - 1; i >= 0; i-- , j--) {
    if (maxIndex - i < k) {
      temp[j] = nums[i];
    }
    if (i < k) {
      nums[i] = temp[i];
    } else {
      nums[i] = nums[i - k];
    }
  }
};

var nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3)
console.log(nums);

var nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 2)
console.log(nums);

var nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 8)
console.log(nums);