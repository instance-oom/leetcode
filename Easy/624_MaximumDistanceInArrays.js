// https://leetcode.com/problems/maximum-distance-in-arrays/#/description

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  var arrLen = arrays.length;
  var min = arrays[0][0];
  var secondMin = Number.MAX_SAFE_INTEGER;
  var minIndex = 0;
  var max = arrays[0][arrays[0].length - 1];
  var secondMax = Number.MIN_SAFE_INTEGER;
  var maxIndex = 0;
  for (var i = 1; i < arrLen; i++) {
    var left = arrays[i][0];
    var right = arrays[i][arrays[i].length - 1];
    if (min > left) {
      secondMin = min;
      min = left;
      minIndex = i;
    } else {
      secondMin = Math.min(secondMin, left);
    }
    if (max < right) {
      secondMax = max;
      max = right;
      maxIndex = i;
    } else {
      secondMax = Math.max(secondMax, right);
    }
  }
  // console.log(min, max, secondMin, secondMax, minIndex, maxIndex);
  if (minIndex !== maxIndex) {
    return Math.abs(min - max);
  } else {
    return Math.max(Math.abs(secondMin - max), Math.abs(min - secondMax));
  }
};

var arrays = [[1, 2, 3], [4, 5], [-1, 2, 10], [-2, 94]];
console.log(maxDistance(arrays));

arrays = [[1, 4, 5], [0, 2]];
console.log(maxDistance(arrays));

arrays = [[1], [1]];
console.log(maxDistance(arrays));

arrays = [[1, 5], [3, 4]];
console.log(maxDistance(arrays));
