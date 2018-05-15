// https://leetcode-cn.com/contest/weekly-contest-84/problems/image-overlap/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function (A, B) {
  let strA = '';
  let strB = '';
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      strA += A[i][j];
      strB += B[i][j];
    }
  }
  let result = 0;
  let bStart = strB.indexOf('1');
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] === '0') {
      continue;
    }
    let temp = 0;
    let k = i;
    let bs = bStart;
    while (k < strA.length && bs < strB.length) {
      if (strA[k] === '1' && strA[k] === strB[bs]) {
        temp++;
      }
      k++;
      bs++;
    }
    result = Math.max(result, temp);
  }
  return result;
};

var A = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 1, 0]
];
var B = [
  [0, 0, 0],
  [0, 1, 1],
  [0, 1, 1]
];
console.log(largestOverlap(A, B));  // 3