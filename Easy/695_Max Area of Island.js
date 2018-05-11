// https://leetcode.com/problems/max-area-of-island/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;
  let height = grid.length;
  let width = grid[0].length;

  let getArea = (i, j) => {
    if (grid[i][j] === 0) {
      return 0;
    } else {
      grid[i][j] = 0;
    }
    let area = 1;
    if (j <= width - 2) {
      area += getArea(i, j + 1);
    }
    if (j >= 1) {
      area += getArea(i, j - 1);
    }
    if (i <= height - 2) {
      area += getArea(i + 1, j);
    }
    if (i >= 1) {
      area += getArea(i - 1, j);
    }
    return area;
  }


  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        let tempArea = getArea(i, j);
        result = Math.max(result, tempArea);
      }
    }
  }
  return result;
};

var grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];
console.log(maxAreaOfIsland(grid));