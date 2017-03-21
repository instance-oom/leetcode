// https://leetcode.com/problems/contains-duplicate/#/description

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!nums || nums.length < 2) return false;
  var obj = {};
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 0;
    obj[nums[i]]++;
    if (obj[nums[i]] > 1) return true;
  }
  return false;
};

var nums = [];
console.log(`[${nums}] => ${containsDuplicate(nums)}`);
nums = [1, 2];
console.log(`[${nums}] => ${containsDuplicate(nums)}`);
nums = [1, 2, 1, 3]
console.log(`[${nums}] => ${containsDuplicate(nums)}`);