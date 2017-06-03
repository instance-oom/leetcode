// https://leetcode.com/problems/number-of-boomerangs/#/description

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  var length = points.length;
  var count = 0;
  for (var i = 0; i < length; i++) {
    var obj = {};
    for (var j = 0; j < length; j++) {
      if (i === j) continue;
      var width = Math.abs(points[i][0] - points[j][0]);
      var height = Math.abs(points[i][1] - points[j][1]);
      var distance = Math.pow(width, 2) + Math.pow(height, 2);

      if (!obj[distance]) obj[distance] = 0;
      count += obj[distance] * 2;
      obj[distance]++;
    }
  }
  return count;
};

var points = [[0, 0], [1, 0], [2, 0]];
console.log(numberOfBoomerangs(points));

points = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]];
console.log(numberOfBoomerangs(points));