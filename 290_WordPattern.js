// https://leetcode.com/problems/word-pattern/#/description

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  var patternObj = {};
  var patternLength = pattern.length;
  var strArr = str.split(' ');
  var strArrLength = strArr.length;
  if (patternLength !== strArrLength) {
    return false;
  }
  var uniqArr = [];
  for (var i = 0; i < patternLength; i++) {
    var tempPattern = pattern[i];
    var word = strArr[i];

    if (!patternObj[tempPattern]) {
      if (uniqArr.indexOf(word) !== -1) {
        return false;
      }
      uniqArr.push(word);
      patternObj[tempPattern] = word;
    } else {
      if (patternObj[tempPattern] !== word) {
        return false;
      }
    }
  }
  return true;
};

var pattern = "abba";
var str = "dog cat cat dog";
console.log(wordPattern(pattern, str));   //true

pattern = "abba";
str = "dog cat cat fish";
console.log(wordPattern(pattern, str));   //false

pattern = "aaaa";
str = "dog cat cat dog";
console.log(wordPattern(pattern, str));   //false

pattern = "abba";
str = "dog dog dog dog";
console.log(wordPattern(pattern, str));   //false