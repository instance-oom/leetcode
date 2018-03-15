// https://leetcode.com/problems/range-sum-query-2d-immutable/description/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
  this.sums = [];
  for (let i = 0; i < matrix.length; i++) {
    let temp = matrix[i];
    this.sums[i] = [temp[0]];
    for (let j = 1; j < temp.length; j++) {
      this.sums[i][j] = this.sums[i][j - 1] + temp[j];
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  row2 = Math.min(row2, this.matrix.length);
  for (row1; row1 <= row2; row1++) {
    let colStart = col1;
    let colEnd = Math.min(col2, this.matrix[row1].length);
    for (colStart; colStart <= colEnd; colStart++) {
      sum += this.matrix[row1][colStart];
    }
  }
  return sum;
};

NumMatrix.prototype.sumRegion2 = function (row1, col1, row2, col2) {
  let sum = 0;
  for (row1; row1 <= row2; row1++) {
    sum += (this.sums[row1][col2] - this.sums[row1][col1]) + this.matrix[row1][col1];
  }
  return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];
let obj = new NumMatrix(matrix);
console.log(obj.sumRegion2(2, 1, 4, 3))  // 8
console.log(obj.sumRegion2(1, 1, 2, 2))  // 11
console.log(obj.sumRegion2(1, 2, 2, 4))  // 12