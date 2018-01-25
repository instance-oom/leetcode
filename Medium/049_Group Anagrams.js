// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var obj = {};
  var uniq = [];
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i];
    var temp = str.split('').sort().join('');
    if (obj[temp] === undefined) {
      uniq.push(temp);
      obj[temp] = [str];
    } else {
      obj[temp].push(str);
    }
  }
  var result = [];
  for (var j = 0; j < uniq.length; j++) {
    var key = uniq[j];
    result.push(obj[key]);
  }
  return result;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));