// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let nums = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      nums.push(matrix[i][j]);
    }
  }
  nums.sort((x, y) => x - y > 0 ? 1 : -1);
  return nums[k - 1];
};

var matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
];
var k = 8;
console.log(kthSmallest(matrix, k));

var matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
var k = 5;
console.log(kthSmallest(matrix, k));
