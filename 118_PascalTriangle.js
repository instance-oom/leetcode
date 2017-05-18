// https://leetcode.com/problems/pascals-triangle/#/description

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  var result = [[1]];
  if (numRows === 1) return result;
  for (var i = 1; i < numRows; i++) {
    result[i] = [1];
    var j = 1;
    for (j; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][j] = 1;
  }
  return result;
};

console.log(generate(5));
console.log(generate(7));