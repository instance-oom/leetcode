// https://leetcode.com/problems/first-unique-character-in-a-string/#/description

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (!s) return -1;
  var length = s.length;
  if (length === 1) return 0;
  var obj = {};
  for (var i = 0; i < length; i++) {
    var char = s[i];
    if (!obj[char]) obj[char] = { count: 0, index: i }
    obj[char].count++;
  }
  var result = -1;
  for (var t in obj) {
    if (obj[t].count === 1) {
      result = obj[t].index;
      break;
    }
  }
  return result;
};

var s = "leetcode";
console.log(firstUniqChar(s));
s = "loveleetcode";
console.log(firstUniqChar(s));