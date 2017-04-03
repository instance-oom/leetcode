// https://leetcode.com/problems/nim-game/?tab=Description

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};