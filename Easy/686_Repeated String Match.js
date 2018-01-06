// https://leetcode.com/problems/repeated-string-match/description/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  var times = 1;
  var destStr = A;
  while (destStr.length < B.length) {
    destStr += A;
    times++;
  }

  if (destStr.indexOf(B) !== -1) {
    return times;
  } destStr += A;
  times++;
  if (destStr.indexOf(B) !== -1) {
    return times;
  }
  else {
    return -1;
  }
};

var A = 'abcd';
var B = 'cdabcdab';

console.log(repeatedStringMatch(A, B));