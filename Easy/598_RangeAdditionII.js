// https://leetcode.com/problems/range-addition-ii/#/description

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  var length = ops.length;
  if (length === 0) return m * n;
  var row = ops[0][0];
  var col = ops[0][1];
  for (var k = 1; k < length; k++) {
    row = Math.min(row, ops[k][0]);
    col = Math.min(col, ops[k][1]);
  }
  return row * col;
};

var m = 3;
var n = 4;
var operations = [[2, 2], [3, 3]];
console.log(maxCount(m, n, operations));