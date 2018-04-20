// https://leetcode.com/problems/partition-labels/description/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let endPosition = {};
  for (let i = 0; i < S.length; i++) {
    endPosition[S[i]] = i;
  }

  let result = [];
  let start = 0, end = 0;
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, endPosition[S[i]]);
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }
  return result;
};

var S = "ababcbacadefegdehijhklij";
console.log(partitionLabels(S));