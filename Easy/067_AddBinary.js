// https://leetcode.com/problems/add-binary/#/description

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var result = [];

  var subLen = a.length - b.length;
  if (subLen > 0) {
    for (var i = 0; i < subLen; i++) {
      b = '0' + b;
    }
  } else if (subLen < 0) {
    subLen = -subLen;
    for (var i = 0; i < subLen; i++) {
      a = '0' + a;
    }
  }

  var maxLen = a.length - 1;
  var carry = false;

  for (maxLen; maxLen >= 0; maxLen--) {
    var temp = a[maxLen] + b[maxLen];
    if (carry) {
      switch (temp) {
        case '11':
          result[maxLen] = '1';
          break;
        case '10':
        case '01':
          result[maxLen] = '0';
          break;
        case '00':
          result[maxLen] = '1';
          carry = false;
          break;
      }
    } else {
      switch (temp) {
        case '11':
          carry = true;
          result[maxLen] = '0';
          break;
        case '10':
        case '01':
          result[maxLen] = '1';
          break;
        case '00':
          result[maxLen] = '0';
          break;
      }
    }
  }
  var str = result.join('');
  if (carry) {
    str = '1' + str;
  }
  return str
};

console.log(addBinary('11', '1'));
console.log(addBinary('101', '1'));
console.log(addBinary('1111', '11'));

// TODO: Not Working