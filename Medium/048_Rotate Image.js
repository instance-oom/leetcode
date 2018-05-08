// https://leetcode.com/problems/rotate-image/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let matrixWidth = matrix.length;
  for (let i = 0; i < matrixWidth; i++) {
    for (let j = i + 1; j < matrixWidth; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrixWidth; i++) {
    let start = 0;
    let end = matrixWidth - 1;
    while (start < end) {
      let temp = matrix[i][start];
      matrix[i][start] = matrix[i][end];
      matrix[i][end] = temp;
      start++;
      end--;
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(matrix);
console.log(matrix);

var matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
rotate(matrix2);
console.log(matrix2);