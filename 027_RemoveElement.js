// https://leetcode.com/problems/remove-element/#/description

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var length = nums.length;
  var i = 0;
  while (true) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      continue;
    }
    if (nums[i] === undefined) break;
    i++;
  }
  return nums.length;
};

var nums = [3, 2, 2, 3, 4, 5, 6, 3];
var val = 3;
console.log(removeElement(nums, val), nums);
nums = [1, 1, 1];
val = 1;
console.log(removeElement(nums, val), nums);
