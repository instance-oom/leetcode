// https://leetcode.com/problems/count-binary-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let count = 0;
  let part1Count = 0;
  let part2Count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      part2Count++;
    } else {
      part1Count = part2Count;
      part2Count = 1;
    }
    if (part1Count >= part2Count) {
      count++;
    }
  }
  return count;
};

console.log(countBinarySubstrings('00110011'));   // 6
console.log(countBinarySubstrings('10101'));      // 4