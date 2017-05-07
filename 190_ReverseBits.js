// https://leetcode.com/problems/reverse-bits/#/description

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var binary = "00000000000000000000000000000000" + n.toString(2);
  binary = binary.substr(binary.length - 32);
  var reverseed = binary.split('').reverse().join('');
  reverseed = reverseed.substr(reverseed.length - 32);
  return parseInt(reverseed, 2);
};

console.log(reverseBits(2));
console.log(reverseBits(43261596));