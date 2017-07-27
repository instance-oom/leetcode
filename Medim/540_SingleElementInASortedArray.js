// https://leetcode.com/problems/single-element-in-a-sorted-array/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  var len = nums.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    if (i % 2 === 0) sum -= nums[i];
    else sum += nums[i];
  }
  return sum < 0 ? -sum : sum;
};

var nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(nums));

var nums = [3, 3, 7, 7, 10, 11, 11];
console.log(singleNonDuplicate(nums));

var nums = [3, 7, 7, 10, 10, 11, 11];
console.log(singleNonDuplicate(nums));

var nums = [7, 7, 10, 10, 11, 11, 123];
console.log(singleNonDuplicate(nums));