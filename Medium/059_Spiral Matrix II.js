// https://leetcode.com/problems/spiral-matrix-ii/description/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }
  let endNum = Math.pow(n, 2);

  let rowS = 0;
  let rowE = n - 1;
  let colS = 0;
  let colE = n - 1;

  let currNum = 1;
  while (currNum <= endNum) {
    for (let i = colS; i <= colE; i++) {
      result[rowS][i] = currNum;
      currNum++;
    }
    rowS++;

    for (let i = rowS; i <= rowE; i++) {
      result[i][colE] = currNum;
      currNum++;
    }
    colE--;

    for (let i = colE; i >= colS; i--) {
      result[rowE][i] = currNum;
      currNum++;
    }
    rowE--;

    for (let i = rowE; i >= rowS; i--) {
      result[i][colS] = currNum;
      currNum++;
    }
    colS++;
  }

  return result;
};

console.log(generateMatrix(3));