// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let max = 1;
  let start = 0;
  let end = 1;

  let tempSubString = [s[start]];
  while (end < s.length) {
    if (tempSubString.indexOf(s[end]) !== -1) {
      tempSubString.shift();
      start++;
    } else {
      tempSubString.push(s[end]);
      end++;
      max = Math.max(max, tempSubString.length);
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));  //3
console.log(lengthOfLongestSubstring('bbbbb'));     //1
console.log(lengthOfLongestSubstring('pwwkew'));    //3