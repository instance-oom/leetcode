// https://leetcode.com/problems/positions-of-large-groups/description/

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
  let result = [];
  let i = 0;
  while (i < S.length) {
    let startIndex = i;
    let endIndex = i + 1;
    while (S[startIndex] === S[endIndex]) {
      endIndex++;
    }
    if (endIndex - startIndex >= 3) {
      result.push([startIndex, endIndex - 1]);
    }
    i = endIndex;
  }
  return result;
};

console.log(largeGroupPositions('abbxxxxzzy'));         // [[3,6]]
console.log(largeGroupPositions('abc'));                // []
console.log(largeGroupPositions('abcdddeeeeaabbbcd'));  // [[3,5],[6,9],[12,14]]