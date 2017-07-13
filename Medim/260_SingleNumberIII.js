// https://leetcode.com/problems/single-number-iii/#/description

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  var len = nums.length;
  nums = nums.sort(function (x1, x2) {
    return x1 - x2;
  });

  console.log(nums)

  var result = [];
  var i = 0;
  while (i < len) {
    if (nums[i] === nums[i + 1]) {
      i = i + 2;
    } else {
      result.push(nums[i]);
      i++;
    }
  }

  return result;
};

var nums = [1, 2, 1, 3, 2, 5];
console.log(singleNumber(nums));

var nums = [1, 2, 1, 3, 2, 5, 5, 6];
console.log(singleNumber(nums));