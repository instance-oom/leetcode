// https://leetcode.com/problems/set-matrix-zeroes/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        for (let k = 0; k < colLength; k++) {
          if (matrix[i][k] !== 0)
            matrix[i][k] = null;
        }
        for (let k = 0; k < rowLength; k++) {
          if (matrix[k][j] !== 0)
            matrix[k][j] = null;
        }
      }
    }
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0;
      }
    }
  }
};

var matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
setZeroes(matrix1);
console.log(matrix1);

var matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(matrix2);
console.log(matrix2);