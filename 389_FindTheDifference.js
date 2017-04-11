// https://leetcode.com/problems/find-the-difference/#/description

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  var sum1 = 0;
  var sum2 = 0;
  var i = 0;
  for (i; i < s.length; i++) {
    sum1 += s.charCodeAt(i);
    sum2 += t.charCodeAt(i);
  }
  sum2 += t.charCodeAt(i);
  return String.fromCharCode(sum2 - sum1);
};


// Improved
var findTheDifference2 = function (s, t) {
  if (!s) return t;
  var i = 0;
  var sLength = s.length;
  var tLength = t.length;
  var obj = {};
  for (i; i < sLength; i++) {
    if (!obj[s[i]]) obj[s[i]] = 0;
    obj[s[i]]++;
  }

  i = 0;
  for (i; i < tLength; i++) {
    if (!obj[t[i]] || --obj[t[i]] < 0) {
      return t[i];
    }
  }
};

var s = "abcd";
var t = "abcde";
console.time('findTheDifference');
console.log(findTheDifference(s, t));
console.timeEnd('findTheDifference');

console.time('findTheDifference2');
console.log(findTheDifference2(s, t));
console.timeEnd('findTheDifference2');