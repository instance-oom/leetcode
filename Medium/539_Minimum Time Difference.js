// https://leetcode.com/problems/minimum-time-difference/description/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  var totalMins = [];
  var len = timePoints.length;

  for (var i = 0; i < len; i++) {
    var arr = timePoints[i].split(":");
    var mins = arr[0] * 60 + parseInt(arr[1], 10);
    totalMins.push(mins);
  }
  totalMins.sort(function (x1, x2) {
    return x1 - x2;
  });

  var result = 24 * 60 - totalMins[len - 1] + totalMins[0];
  for (var i = 0; i < len; i++) {
    var tempDiff = totalMins[i + 1] - totalMins[i];
    if (tempDiff < result) {
      result = tempDiff;
    }
  }

  return result;
};

var timePoints = ["00:00", "13:34", "22:05"];
console.log(findMinDifference(timePoints));