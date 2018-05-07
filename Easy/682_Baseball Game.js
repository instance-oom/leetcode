// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  if (!ops || ops.length === 0) {
    return 0;
  }

  let points = [];
  let pointIndex = 0;
  for (let i = 0; i < ops.length; i++) {
    let op = ops[i];
    switch (op) {
      case '+':
        let tempPlus = points[pointIndex - 1] + points[pointIndex - 2];
        points[pointIndex++] = tempPlus;
        break;
      case 'D':
        let tempD = points[pointIndex - 1] * 2;
        points[pointIndex++] = tempD;
        break;
      case 'C':
        points[--pointIndex] = 0;
        break;
      default:
        points[pointIndex++] = parseInt(op, 10);
        break;
    }
  }
  let result = points.reduce((x, y) => x += y, 0);
  return result;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));                  // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));  // 27