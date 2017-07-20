// https://leetcode.com/problems/isomorphic-strings/#/description

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var len = s.length;

  var objS = {};
  var objT = {};

  for (var i = 0; i < len; i++) {
    var charS = s[i];
    var charT = t[i];
    if (objS[charS] === undefined) objS[charS] = i;
    if (objT[charT] === undefined) objT[charT] = i;
    if (objS[charS] !== objT[charT]) return false;
  }
  return true;
};

var s = 'egg';
var t = 'add';
console.log(isIsomorphic(t, s));

s = 'foo';
t = 'bar';
console.log(isIsomorphic(t, s));

s = 'paper';
t = 'title';
console.log(isIsomorphic(t, s));

s = '';
t = '';
console.log(isIsomorphic(t, s));

s = '123abcd1';
t = 'gyesjdag';
console.log(isIsomorphic(t, s));