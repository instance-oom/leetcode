// https://leetcode.com/problems/ugly-number-ii/description/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  var uglyNums = [1];
  let i2 = i3 = i5 = 0;
  for (let i = 1; i < n; i++) {

    let t2 = uglyNums[i2] * 2;
    let t3 = uglyNums[i3] * 3;
    let t5 = uglyNums[i5] * 5;
    uglyNums[i] = Math.min(t2, t3, t5);
    if (uglyNums[i] === t2) i2++;
    if (uglyNums[i] === t3) i3++;
    if (uglyNums[i] == t5) i5++;
  }
  return uglyNums[n - 1];
};

console.log(nthUglyNumber(5))
console.log(nthUglyNumber(7))
console.log(nthUglyNumber(100))
console.log(nthUglyNumber(1690))