// https://leetcode.com/problems/ransom-note/#/description

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  var ransomObj = {};
  var magazineObj = {};
  for (var i = 0; i < magazine.length; i++) {
    if (ransomNote[i]) {
      if (!ransomObj[ransomNote[i]]) ransomObj[ransomNote[i]] = 0;
      ransomObj[ransomNote[i]]++;
    }
    if (!magazineObj[magazine[i]]) magazineObj[magazine[i]] = 0;
    magazineObj[magazine[i]]++;
  }
  for (var key in ransomObj) {
    if (!magazineObj[key] || ransomObj[key] > magazineObj[key]) return false;
  }
  return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'a'));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aabccc", "bbbbbaac"));