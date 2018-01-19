// https://leetcode.com/problems/integer-break/description/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  var result = 1;
  var tempProduct = 1;
  
  for (var i = 2; i < n; i++) {
    tempProduct = 1;
    var p1 = Math.floor(n / i);
    var p2 = n - p1 * i;

    for (var j = 0; j < i; j++) {
      if (p2 == 0) {
        tempProduct *= p1;
      } else {
        tempProduct *= p1 + 1;
        p2--;
      }
    }
    if (tempProduct < result) break;
    result = tempProduct;
  }

  return result;
};

console.log(integerBreak(2));
console.log(integerBreak(10));