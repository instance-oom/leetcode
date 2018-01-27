// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.indexOf("1") !== -1 || digits.indexOf('0') !== -1) return [];
  var mapping = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  var len = digits.length;
  var result = [];
  for (var i = 0; i < len; i++) {
    var resultLen = result.length || 1;
    for (var j = 0; j < resultLen; j++) {
      var begin = result[0] || '';
      result.shift();
      var characters = mapping[digits[i]];
      for (var k = 0; k < characters.length; k++) {
        result.push(begin + characters[k]);
      }
    }
  }
  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));