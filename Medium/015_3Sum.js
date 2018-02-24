// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort(function (x1, x2) {
    return x1 - x2;
  });

  var result = [];
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    var twoSum = 0 - nums[i];
    var leftIndex = i + 1;
    var rightIndex = len - 1;
    while (leftIndex < rightIndex) {
      var tempTwoSum = nums[leftIndex] + nums[rightIndex];
      if (tempTwoSum > twoSum) {
        rightIndex--;
      } else if (tempTwoSum < twoSum) {
        leftIndex++;
      } else {
        result.push([nums[i], nums[leftIndex], nums[rightIndex]]);

        while (nums[leftIndex] === nums[leftIndex + 1]) {
          leftIndex++;
        }
        leftIndex++;

        while (nums[rightIndex] === nums[rightIndex - 1]) {
          rightIndex--;
        }
        rightIndex--;
      }
    }
  }
  return result;
};

var S = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(S));

var S = [0, 0, 0];
console.log(threeSum(S));