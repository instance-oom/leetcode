// https://leetcode.com/problems/valid-palindrome-ii/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  var low = 0;
  var high = s.length - 1;
  var skiped = false;

  while (low < high) {
    if (s[low] === s[high]) {
      low++;
      high--;
    } else {

      var tempLow = low;
      var tempHigh = high - 1;

      while (tempLow < tempHigh) {
        if (s[tempLow] != s[tempHigh]) break;
        tempLow++;
        tempHigh--;
        if (tempLow >= tempHigh) return true;
      }

      low++;
      while (low < high) {
        if (s[low] !== s[high]) return false;
        low++;
        high--;
      }
    }
  }

  return true;
};

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
console.log(validPalindrome('abcbcca'));
console.log(validPalindrome("ebcbbececabbacecbbcbe"));