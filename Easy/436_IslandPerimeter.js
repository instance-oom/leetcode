// https://leetcode.com/problems/island-perimeter/?tab=Description

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;
  var gHeight = grid.length;
  var gWidth = grid[0].length;
  var perimeter = 0;
  for (var i = 0; i < gHeight; i++) {
    for (var j = 0; j < gWidth; j++) {
      if (grid[i][j] !== 1) continue;
      var tempCount = 4;
      if (j > 0 && grid[i][j - 1] === 1) tempCount--;
      if (j < (gWidth - 1) && grid[i][j + 1] === 1) tempCount--;
      if (i > 0 && grid[i - 1][j] === 1) tempCount--;
      if (i < (gHeight - 1) && grid[i + 1][j] === 1) tempCount--;
      perimeter += tempCount;
    }
  }
  return perimeter;
};

var islandMap =
  [[0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]]

console.log(islandPerimeter(islandMap));