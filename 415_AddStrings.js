// https://leetcode.com/problems/add-strings/#/description

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var result = '';
  var i = num1.length - 1;
  var j = num2.length - 1;
  var carry = 0;
  for (i, j; i >= 0 || j >= 0 || carry === 1; i-- , j--) {
    var tempNum1 = i < 0 ? 0 : (num1.charCodeAt(i) - 48);
    var tempNum2 = j < 0 ? 0 : (num2.charCodeAt(j) - 48);
    var tempResult = tempNum1 + tempNum2 + carry;
    result = (tempResult % 10) + result;
    carry = tempResult >= 10 ? 1 : 0;
  }
  return result;
};

console.log(`1 + 0 => ${addStrings('1', '0')}`);
console.log(`1 + 10 => ${addStrings('1', '10')}`);
console.log(`9 + 9 => ${addStrings('9', '9')}`);
console.log(`245 + 1100 => ${addStrings('245', '1100')}`);
console.log(`9333852702227987 + 85731737104263 => ${addStrings('9333852702227987', '85731737104263')}`)