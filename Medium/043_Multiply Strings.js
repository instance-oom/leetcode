// https://leetcode.com/problems/multiply-strings/description/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  var num1Len = num1.length;
  var num2Len = num2.length;
  var result = '';

  function sum(n1, n2) {
    let len1 = n1.length;
    let len2 = n2.length;
    let diffLen = Math.abs(len2 - len1);
    let maxLen = Math.max(len1, len2);
    let sumCarry = 0;
    let sum = '';
    for (let i = 0; i < diffLen; i++) {
      if (len1 > len2) {
        n2 = '0' + n2;
      } else {
        n1 = '0' + n1;
      }
    }
    for (let i = maxLen - 1; i >= 0; i--) {
      var tempSum = parseInt(n1[i], 10) + parseInt(n2[i], 10) + sumCarry;
      if (tempSum > 9) {
        sumCarry = Math.floor(tempSum / 10);
        tempSum = tempSum % 10;
      } else {
        sumCarry = 0;
      }
      sum = tempSum + sum;
    }
    if (sumCarry > 0) {
      sum = sumCarry + sum;
    }
    return sum;
  }

  for (var i = num2Len - 1; i >= 0; i--) {
    var temp2 = parseInt(num2[i], 10);
    var carry = 0;
    var tempProduct = '';
    for (var j = num1Len - 1; j >= 0; j--) {
      var temp1 = parseInt(num1[j], 10);
      var product = temp1 * temp2 + carry;
      if (product > 9) {
        carry = Math.floor(product / 10);
        product = product % 10;
      } else {
        carry = 0;
      }
      tempProduct = product + tempProduct;
    }
    if (carry > 0) {
      tempProduct = carry + tempProduct;
    }
    var diff = num2Len - i - 1;
    for (var k = 0; k < diff; k++) {
      tempProduct += '0';
    }
    result = sum(result, tempProduct);
  }
  return result;
};

console.log(multiply('122223', '89') === (122223 * 89).toString());
console.log(multiply('123', '456') === (123 * 456).toString());
console.log(multiply('123456789', '987654321') === "121932631112635269");