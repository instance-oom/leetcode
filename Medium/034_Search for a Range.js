// https://leetcode.com/problems/search-for-a-range/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums) return [-1, -1];
  let startIndex = nums.indexOf(target);
  if (startIndex === -1) {
    return [-1, -1];
  }
  let endIndex = nums.lastIndexOf(target);
  return [startIndex, endIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));