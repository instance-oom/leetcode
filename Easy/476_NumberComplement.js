// https://leetcode.com/problems/number-complement/?tab=Description

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  var temp = num;
  var fullNum = 1;
  while (temp) {
    temp = temp >> 1;
    fullNum = fullNum << 1;
  }
  return (fullNum - 1) ^ num;
};

let num = Math.floor(Math.random() * 200);
console.log(`The complement of ${num} is ${findComplement(num)}`);