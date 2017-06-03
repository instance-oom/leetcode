// https://leetcode.com/problems/k-diff-pairs-in-an-array/#/description

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  var length = nums.length;
  nums.sort(function (x, y) { return x - y });
  var obj = {};
  for (var i = 0; i < length - 1; i++) {
    var j = i + 1;
    for (j; j < length; j++) {
      var dist = Math.abs(nums[i] - nums[j]);
      if (dist > k) break;
      if (dist === k) {
        var key = nums[i] + ',' + nums[j];
        obj[key] = 0;
      }
    }
  }
  return Object.keys(obj).length;
};

var nums = [3, 1, 4, 1, 5];
var k = 2;
console.log(findPairs(nums, k));

nums = [1, 2, 3, 4, 5];
k = 1;
console.log(findPairs(nums, k));

nums = [1, 3, 1, 5, 4];
k = 0;
console.log(findPairs(nums, k));