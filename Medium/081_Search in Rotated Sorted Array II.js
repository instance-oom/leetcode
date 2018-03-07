// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (!nums || nums.length === 0) {
    return false;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let num = nums[mid];
    if (num === target) {
      return true;
    }
    if (num > nums[left]) {
      if (num > target && nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (num < nums[left]) {
      if (num < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }
  return false;
};

var nums = [4, 5, 6, 7, 0, 1, 2];
console.log(search(nums, 5));
console.log(search(nums, 1));