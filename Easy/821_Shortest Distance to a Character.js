// https://leetcode.com/problems/shortest-distance-to-a-character/description/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let result = [];
  let cPos = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      cPos.push(i);
    }
  }

  for (let i = 0; i < S.length; i++) {
    result[i] = Math.min(...cPos.map(x => Math.abs(x - i)));
  }
  return result;
};

var S = "loveleetcode";
var C = 'e';
console.log(shortestToChar(S, C));