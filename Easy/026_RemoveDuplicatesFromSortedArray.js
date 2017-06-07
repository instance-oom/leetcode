// https://leetcode.com/problems/remove-duplicates-from-sorted-array/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;
  var pos = 1;
  var i = 1;
  while (i < nums.length && pos < nums.length) {
    if (nums[i] !== nums[i - 1]) {
      nums[pos] = nums[i];
      pos++;
    }
    i++;
  }
  nums.splice(pos, nums.length - pos);
  return nums.length;
};

var nums = [1, 1, 2];
console.log(removeDuplicates(nums), nums);

nums = [1, 1, 1, 1, 1];
console.log(removeDuplicates(nums), nums);

nums = [];
console.log(removeDuplicates(nums), nums);

nums = [1, 2, 2];
console.log(removeDuplicates(nums), nums);