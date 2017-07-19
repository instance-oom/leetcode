// https://leetcode.com/problems/valid-palindrome/#/description

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s) return true;
  s = s.trim();
  var start = 0;
  var end = s.length - 1;
  while (start <= end) {
    var tempS = s[start].toLowerCase();
    var tempE = s[end].toLowerCase();
    if ((tempS < '0' || tempS > '9') && (tempS < 'a' || tempS > 'z')) {
      start++;
    } else if ((tempE < '0' || tempE > '9') && (tempE < 'a' || tempE > 'z')) {
      end--;
    } else if (tempS !== tempE) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

var s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

var s = "race a car";
console.log(isPalindrome(s));

var s = "0p";
console.log(isPalindrome(s));

var s = "0p,,P0";
console.log(isPalindrome(s));