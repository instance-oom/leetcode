// https://leetcode.com/problems/rotate-string/description/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A.length !== B.length) {
    return false;
  }
  if (A === B) {
    return true;
  }
  let doubleA = A + A;
  for (let i = 0; i < B.length; i++) {
    let j = 0;
    if (doubleA[i] === B[j]) {
      while (j < B.length) {
        if (doubleA[i + j] === B[j]) {
          j++;
        } else {
          break;
        }
      }
      if (j === B.length) return true;
    }
  }
  return false;
};

var A = 'abcde', B = 'cdeab';
console.log(rotateString(A, B));    // true

var A = 'abcde', B = 'abced';
console.log(rotateString(A, B));    // false
