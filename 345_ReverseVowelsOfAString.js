// https://leetcode.com/problems/reverse-vowels-of-a-string/#/description

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var vowels = { a: true, A: true, e: true, E: true, i: true, I: true, o: true, O: true, u: true, U: true };
  var arr = s.split('');
  var length = s.length;
  var left = 0;
  var right = s.length;
  while (left < right) {
    if (vowels[arr[left]] && vowels[arr[right]]) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
      continue;
    }
    if (!vowels[arr[left]]) left++;
    if (!vowels[arr[right]]) right--;
  }
  return arr.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('hellO'));
console.log(reverseVowels('leetcode'));