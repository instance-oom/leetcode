// https://leetcode.com/problems/arranging-coins/#/description

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var maxLine = Math.floor(Math.sqrt(n * 2));
  for (maxLine; maxLine > 0; maxLine--) {
    var total = Math.floor(maxLine * (maxLine + 1) / 2);
    if (total <= n) {
      break;
    }
  }
  return maxLine;
};

console.log(arrangeCoins(0));
console.log(arrangeCoins(1));
console.log(arrangeCoins(2));
console.log(arrangeCoins(3));
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(18));
console.log(arrangeCoins(846930886));
