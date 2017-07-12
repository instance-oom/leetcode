// https://leetcode.com/problems/sqrtx/#/description

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  var max = Math.ceil(x / 2);

  var high = max;
  var low = max;

  while (max > 0) {
    if (max * max > x) {
      high = max;
      max = Math.floor(max / 2);
    } else {
      low = max;
      break;
    }
  }

  for (high; high >= low; high--) {
    var temp = high * high;
    if (temp <= x) return high;
  }
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(4));
console.log(mySqrt(9));
console.log(mySqrt(16));
console.log(mySqrt(10000));
console.log(mySqrt(20));
console.log(mySqrt(100000));
console.log(mySqrt(2147395599));
