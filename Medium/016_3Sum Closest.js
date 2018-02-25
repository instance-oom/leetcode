// https://leetcode.com/problems/3sum-closest/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort(function (x1, x2) {
    return x1 - x2;
  });

  var len = nums.length;
  var closestTarget = nums[0] + nums[1] + nums[2];
  var diff = Math.abs(target - closestTarget);

  for (var i = 0; i < len; i++) {
    var leftIndex = i + 1;
    var rightIndex = len - 1;

    while (leftIndex < rightIndex) {
      var tempSum = nums[i] + nums[leftIndex] + nums[rightIndex];
      if (tempSum > target) {
        rightIndex--;
      } else if (tempSum < target) {
        leftIndex++;
      } else {
        return target;
      }

      var tempDiff = Math.abs(tempSum - target);
      if (diff > tempDiff) {
        diff = tempDiff;
        closestTarget = tempSum;
      }
    }
  }
  return closestTarget;
};

var nums = [-1, 2, 1, -4];
var target = 1;
console.log(threeSumClosest(nums, target));