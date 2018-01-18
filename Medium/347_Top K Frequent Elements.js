// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var obj = {};
  var uniqNums = [];
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (obj[num] === undefined) {
      obj[num] = 1;
      uniqNums.push(num);
    } else {
      obj[num]++;
    }
  }

  uniqNums.sort(function (x1, x2) {
    return obj[x2] - obj[x1];
  });

  return uniqNums.splice(0, k);
};

var nums = [2, 2, 3, 1, 1, 1];
var k = 2;
console.log(topKFrequent(nums, k));

nums = [4, 1, -1, 2, -1, 2, 3];
console.log(topKFrequent(nums, k));