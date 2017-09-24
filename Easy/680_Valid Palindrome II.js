// https://leetcode.com/problems/valid-palindrome-ii/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  var arr = s.split('');
  var reversedArr = [].concat(arr).reverse();

  if (arr.join('') === reversedArr.join('')) {
    return true;
  }

  var len = s.length;
  for (var i = 0; i < len; i++) {
    var temp = arr[i];
    arr[i] = '';
    reversedArr[len - 1 - i] = '';
    if (arr.join('') === reversedArr.join('')) {
      return true;
    }
    arr[i] = temp;
    reversedArr[len - 1 - i] = temp;
  }

  return false;
};


console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));