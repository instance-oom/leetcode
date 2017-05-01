// https://leetcode.com/problems/length-of-last-word/#/description

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  s = s.trimRight();
  var arr = s.split(' ');
  return arr[arr.length - 1].length;
};

var s = "Hello World";
console.log(lengthOfLastWord(s));

s = "HelloWorld";
console.log(lengthOfLastWord(s));

s = "";
console.log(lengthOfLastWord(s));

s = "  aaa";
console.log(lengthOfLastWord(s));

s = "a";
console.log(lengthOfLastWord(s));