// https://leetcode.com/problems/compare-version-numbers/description/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let t1 = version1.split('.');
  let t2 = version2.split('.');

  let maxLen = Math.max(t1.length, t2.length);
  for (let i = 0; i < maxLen; i++) {
    let tt1 = t1[i] === undefined ? 0 : parseInt(t1[i], 10);
    let tt2 = t2[i] === undefined ? 0 : parseInt(t2[i], 10);
    if (tt1 > tt2) {
      return 1;
    }
    if (tt1 < tt2) {
      return -1;
    }
  }
  return 0;
};

console.log(compareVersion('1.2', '1.2.3'));
console.log(compareVersion('1.2', '1.2.0'));