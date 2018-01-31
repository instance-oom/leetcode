// https://leetcode.com/problems/string-to-integer-atoi/description/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = (str || '').trim();
  if (!str) return 0;

  let isPositive = true;
  let start = 0;
  if (str[start] === '-') {
    isPositive = false;
    start++;
  } else if (str[start] === '+') {
    start++;
  }

  let result = 0;
  for (let i = start; i < str.length; i++) {
    let tempStr = str[i];
    if (tempStr < '0' || tempStr > '9') break;

    if (isPositive) {
      result = 10 * result + parseInt(tempStr, 10);
      if (result > 2147483647) return 2147483647;
    } else {
      result = 10 * result - parseInt(tempStr, 10);
      if (result < -2147483648) return -2147483648;
    }
  }
  return result;
};

console.log(myAtoi('    -23aa123'));
console.log(myAtoi('-+23'));
console.log(myAtoi('-2147483649'));