// https://leetcode.com/problems/powx-n/description/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let pows = function (num, pow) {
    if (pow === 0) return 1.0;
    if (pow === 1) return num;
    let sub = myPow(num, Math.floor(pow / 2));
    return sub * sub * myPow(num, Math.floor(pow % 2));
  }
  if (n < 0)
    return 1.0 / pows(x, -n);
  return pows(x, n);
};

console.log(myPow(2.00000, 10));
console.log(myPow(1.00001, 123456));