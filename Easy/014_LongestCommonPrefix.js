// https://leetcode.com/problems/longest-common-prefix/#/description

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  strs = strs.sort(function (s1, s2) {
    return s1.length - s2.length;
  });
  var result = strs[0];
  for (var i = 1; i < strs.length && result; i++) {
    if (!strs[i].startsWith(result)) {
      result = result.substr(0, result.length - 1);
      i = 0;
    }
  }
  return result;
};

var strs = ['das', 'dasddd', 'da'];
console.log(longestCommonPrefix(strs));

var strs = ['das', 'dasddd', 'da', ''];
console.log(longestCommonPrefix(strs));

var strs = ['das', 'dasddd', 'ada', 's'];
console.log(longestCommonPrefix(strs));

var strs = ["aca", "cba"];
console.log(longestCommonPrefix(strs));