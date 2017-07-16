// https://leetcode.com/problems/contains-duplicate-ii/#/description

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var len = nums.length;
  var obj = {};
  for (var i = 0; i < len; i++) {
    var num = nums[i];
    if (obj[num] === undefined) {
      obj[num] = i;
    } else {
      if (i - obj[num] <= k) return true;
      obj[num] = i;
    }
  }
  return false;
};


var nums = [1, 2, 3, 4, 5, 1];
var k = 3;
console.log(containsNearbyDuplicate(nums, k));