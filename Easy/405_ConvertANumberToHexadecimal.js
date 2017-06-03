// https://leetcode.com/problems/convert-a-number-to-hexadecimal/#/description

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num >= 0 && num < 10) return num.toString();
  var hexs = '0123456789abcdef';
  var result = '';
  for (var i = 0; i < 8 && num !== 0; i++) {
    result = hexs[num & 15] + result;
    num = num >> 4;
  }
  return result;
};

console.log(`-1 => ${toHex(-1)}`)
console.log(`0 => ${toHex(0)}`)
console.log(`26 => ${toHex(26)}`)
console.log(`175 => ${toHex(175)}`)