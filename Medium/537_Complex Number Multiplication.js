// https://leetcode.com/problems/complex-number-multiplication/description/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  var arrA = a.split('+');
  var arrB = b.split('+');
  var cA = parseInt(arrA[0]);
  var cB = parseInt(arrA[1]);
  var cC = parseInt(arrB[0]);
  var cD = parseInt(arrB[1]);

  var part1 = cA * cC - cB * cD;
  var part2 = cB * cC + cA * cD;

  return part1 + '+' + part2 + 'i';
};

var a = '1+1i';
var b = '1+1i';
console.log(complexNumberMultiply(a, b));

var a = '1+-1i';
var b = '1+-1i';
console.log(complexNumberMultiply(a, b));

var a = '1+2i';
var b = '2+3i';
console.log(complexNumberMultiply(a, b));