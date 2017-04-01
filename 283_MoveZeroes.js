// https://leetcode.com/problems/move-zeroes/#/description

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums || !nums.length) return;
  var length = nums.length;
  var count = 0;
  var i = 0;
  while (count < length) {
    count++;
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      continue;
    }
    i++;
  }
};

var moveZeroes2 = function (nums) {
  if (!nums || !nums.length) return;
  var length = nums.length;
  var index = 0;
  for (var i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  while (index < length) {
    nums[index] = 0;
    index++;
  }
};

var nums = [0, 1, 0, 3, 12];
moveZeroes2(nums);
console.log(nums);

nums = [0, 0, 1];
moveZeroes2(nums);
console.log(nums);