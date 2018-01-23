// https://leetcode.com/problems/toeplitz-matrix/description/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  var columnLen = Math.max(0, matrix[0].length - 1);
  var rowLen = Math.max(0, matrix.length - 1);

  if (columnLen === 0 || rowLen === 0) {
    return true;
  }

  for (var i = 0; i < rowLen; i++) {
    for (var j = 0; j < columnLen; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
    }
  }

  return true;
};

var matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]];
console.log(isToeplitzMatrix(matrix));

var matrix = [[1, 2], [2, 2]];
console.log(isToeplitzMatrix(matrix));

var matrix = [[18], [66]];
console.log(isToeplitzMatrix(matrix));
