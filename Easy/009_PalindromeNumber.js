// https://leetcode.com/problems/palindrome-number/#/description

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x >= 0 && x < 10) return true;

  var bak = x;
  var n = 0;
  while (x) {
    n = n * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return bak === n;
};

console.log(isPalindrome(-12321));
console.log(isPalindrome(0));
console.log(isPalindrome(3));
console.log(isPalindrome(66));
console.log(isPalindrome(26));
console.log(isPalindrome(12321));