// https://leetcode.com/problems/count-and-say/#/description

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  var tempStr = countAndSay(n - 1);
  var str = '';
  var tempArr = tempStr.split('');
  var count = 1;
  for (var i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      str += count + tempArr[i];
      count = 1;
    }
  }
  return str;
};

console.log(countAndSay(1));
console.log(countAndSay(4));
console.log(countAndSay(5));