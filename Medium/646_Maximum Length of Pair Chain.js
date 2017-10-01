// https://leetcode.com/problems/maximum-length-of-pair-chain/description/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort(function (x, y) {
    return x[1] - y[1];
  });

  var len = pairs.length;
  var count = 1;
  var currentMax = pairs[0][1];
  for (var i = 1; i < len; i++) {
    var temp = pairs[i];
    if (temp[0] > currentMax) {
      count++;
      currentMax = temp[1]
    }
  }
  return count;
};

var pairs = [[1, 2], [2, 3], [3, 4]];
console.log(findLongestChain(pairs));
var pairs = [[1, 5], [2, 3], [3, 4], [5, 8], [6, 7]];
console.log(findLongestChain(pairs));