// https://leetcode.com/problems/find-all-anagrams-in-a-string/#/description

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var lenS = s.length;
  var lenP = p.length;
  if (lenS < lenP) return [];

  var objS = {};
  var objP = {};
  for (var i = 0; i < lenP; i++) {
    var tempP = p[i].charCodeAt(0);
    if (objP[tempP] === undefined) objP[tempP] = 1;
    else objP[tempP]++;

    var tempS = s[i].charCodeAt(0);
    if (objS[tempS] === undefined) objS[tempS] = 1;
    else objS[tempS]++;
  }

  var result = [];
  if (JSON.stringify(objS) === JSON.stringify(objP)) result = [0];

  for (var i = 1; i <= lenS - lenP; i++) {
    var start = s[i - 1].charCodeAt(0);
    var end = s[i + lenP - 1].charCodeAt(0);

    if (objS[end] === undefined) objS[end] = 1;
    else objS[end]++;
    objS[start]--;
    if (objS[start] === 0) delete objS[start];
    if (JSON.stringify(objS) === JSON.stringify(objP)) result.push(i);
  }
  return result;
};

var s = 'cbaebabacd';
var p = 'abc';
console.log(findAnagrams(s, p));

s = 'abab';
p = 'ab';
console.log(findAnagrams(s, p));
