// https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let obj = {};
  for (let i = 0; i < J.length; i++) {
    obj[J[i]] = true;
  }
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (obj[S[i]]) count++;
  }
  return count;
};

var J = "aA";
var S = "aAAbbbb";
console.log(numJewelsInStones(J, S));