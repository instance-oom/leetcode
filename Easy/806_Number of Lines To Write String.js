// https://leetcode.com/problems/number-of-lines-to-write-string/description/

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  let lines = 1;
  let tempCount = 0;
  for (let i = 0; i < S.length; i++) {
    let tempLen = widths[S.charCodeAt(i) - 97];
    tempCount += tempLen;
    if (tempCount > 100) {
      lines++;
      tempCount = tempLen;
    }
  }
  return [lines, tempCount];
};

var widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var S = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(widths, S));

var widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
var S = "bbbcccdddaaa"
console.log(numberOfLines(widths, S));