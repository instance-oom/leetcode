// https://leetcode.com/problems/reshape-the-matrix/#/description

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  var arr = [];
  var l = nums.length;
  for (var i = 0; i < l; i++) {
    arr = arr.concat(nums[i]);
  }
  if (arr.length < (r * c)) return nums;
  var result = [];
  for (var i = 0; i < r; i++) {
    result[i] = [];
    for (var j = 0; j < c; j++) {
      var index = i * c + j;
      result[i][j] = arr[index];
    }
  }
  return result;
};

var nums = [[1, 2], [3, 4]];
var r = 1;
var c = 4;
console.log(matrixReshape(nums, r, c));

r = 2;
c = 4;
console.log(matrixReshape(nums, r, c));

nums = [[1, 2], [3, 4], [5, 6], [7, 8]];
r = 2;
c = 4;
console.log(matrixReshape(nums, r, c));

nums = [[1, 2], [3, 4]];
r = 4;
c = 1;
console.log(matrixReshape(nums, r, c));