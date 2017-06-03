// https://leetcode.com/problems/max-consecutive-ones/?tab=Description

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if (!nums || !nums.length) return 0;
  var arrs = nums.join('').split('0').sort().reverse();
  return arrs[0].length;
};

var nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));