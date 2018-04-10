// https://leetcode.com/problems/largest-triangle-area/description/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let len = points.length;
  let maxArea = 0;
  for (let p1 of points) {
    for (let p2 of points) {
      for (let p3 of points) {
        if (p1 === p2 || p1 === p3 || p2 === p3) {
          continue;
        }
        let p12X = Math.abs(p1[0] - p2[0]);
        let p12Y = Math.abs(p1[1] - p2[1]);
        let p13X = Math.abs(p1[0] - p3[0]);
        let p13Y = Math.abs(p1[1] - p3[1]);
        let p23X = Math.abs(p2[0] - p3[0]);
        let p23Y = Math.abs(p2[1] - p3[1]);

        let p12 = Math.sqrt(p12X * p12X + p12Y * p12Y);
        let p13 = Math.sqrt(p13X * p13X + p13Y * p13Y);
        let p23 = Math.sqrt(p23X * p23X + p23Y * p23Y);

        let p = (p12 + p13 + p23) / 2;
        let area = Math.sqrt(p * (p - p12) * (p - p13) * (p - p23));
        if (Number.isNaN(area)) continue;
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};

// var points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]];
// console.log(largestTriangleArea(points));

points = [[-35, 19], [40, 19], [27, -20], [35, -3], [44, 20], [22, -21], [35, 33], [-19, 42], [11, 47], [11, 37]];
console.log(largestTriangleArea(points));
