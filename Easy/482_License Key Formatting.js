// https://leetcode.com/problems/license-key-formatting/description/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  S = S.replace(/-/g, '').toUpperCase();
  let len = S.length;
  let firstPartLen = len % K;
  let result = '';
  if (firstPartLen !== 0) {
    for (let i = 0; i < firstPartLen; i++) {
      result += S[i];
    }
  }
  for (let i = firstPartLen; i < len; i += K) {
    let temp = '';
    for (let j = i; j < i + K; j++) {
      temp += S[j];
    }
    if (temp) {
      if (result) {
        result += '-' + temp;
      } else {
        result = temp;
      }
    }
  }
  return result;
};

let S = "5F3Z-2e-9-w";
let K = 4;
console.log(licenseKeyFormatting(S, K));

S = "2-5g-3-J", K = 2
console.log(licenseKeyFormatting(S, K));