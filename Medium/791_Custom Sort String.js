// https://leetcode.com/problems/custom-sort-string/description/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  let obj = {};
  for (let i = 0; i < S.length; i++) {
    obj[S[i]] = i;
  }

  let tempArr = T.split('');
  let len = tempArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (obj[tempArr[i]] >= obj[tempArr[j]]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[i];
        tempArr[i] = temp;
      }
    }
  }
  return tempArr.join('');
};

var S = "cba";
var T = "abcd";
console.log(customSortString(S, T));

S = "exv";
T = "xwvee";
console.log(customSortString(S, T));
