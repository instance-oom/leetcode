// https://leetcode.com/problems/integer-to-roman/description/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var c = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]
  ]
  var roman = '';
  roman += (c[3][Math.floor(num / 1000 % 10)]);
  roman += (c[2][Math.floor(num / 100 % 10)]);
  roman += (c[1][Math.floor(num / 10 % 10)]);
  roman += (c[0][num % 10]);
  return roman;
};

console.log(intToRoman(1));
console.log(intToRoman(312));
console.log(intToRoman(3521));