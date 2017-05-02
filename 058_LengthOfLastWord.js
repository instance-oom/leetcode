// https://leetcode.com/problems/length-of-last-word/#/description

/**
 * @param {string} s
 * @return {number}
 */
// Simple
var lengthOfLastWord2 = function (s) {
  if (!s) return 0;
  s = s.trimRight();
  var arr = s.split(' ');
  return arr[arr.length - 1].length;
};


// Improve
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  var started = false;
  var length = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ' && !started) {
      started = true;
    }
    if (!started) continue;
    if (started && s[i] === ' ') {
      break;
    }
    length++;
  }
  return length;
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

s = " ";
console.log(lengthOfLastWord(s));