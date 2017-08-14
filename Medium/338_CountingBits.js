// https://leetcode.com/problems/counting-bits/#/description

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var result = [];
  for (var i = 0; i <= num; i++) {
    result[i] = i.toString(2).replace(/0/g, '').length;
  }
  return result;
};

console.log(countBits(5));
console.log(countBits(10));