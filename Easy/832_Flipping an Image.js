// https://leetcode-cn.com/contest/weekly-contest-84/problems/flipping-an-image/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let len = A.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    result[i] = [];
    for (let j = 0; j < len; j++) {
      if (A[i][j] === 0) {
        result[i][len - j - 1] = 1;
      } else {
        result[i][len - j - 1] = 0;
      }
    }
  }
  return result;
};

var A = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
console.log(flipAndInvertImage(A));
console.log([[1, 0, 0], [0, 1, 0], [1, 1, 1]]);

var A = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
console.log(flipAndInvertImage(A));
console.log([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);