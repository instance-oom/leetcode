// https://leetcode.com/problems/pascals-triangle-ii/#/description

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var result = [[1]];
  for (var i = 1; i <= rowIndex; i++) {
    result[i] = [1];
    var j = 1;
    for (j; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][j] = 1;
  }
  return result[rowIndex];
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
console.log(getRow(20));