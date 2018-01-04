// https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  var max = nums[0];
  var maxIndex = 0;
  var secondMax;
  var secondIndex = 0;

  for (var i = 1; i < nums.length; i++) {
    var num = nums[i];
    if (max > num) {
      if (secondMax === undefined || secondMax < num) {
        secondMax = num;
        secondIndex = i;
      }
    } else {
      secondMax = max;
      secondIndex = maxIndex;

      max = num;
      maxIndex = i;
    }
  }

  return secondMax * 2 > max ? -1 : maxIndex;
};

console.log(dominantIndex([3, 2, 6, 0]));
console.log(dominantIndex([1, 2, 3, 4]));