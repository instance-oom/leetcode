// https://leetcode.com/problems/valid-anagram/#/description

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if ((s && !t) || (!s && t)) return false;
  if (!s && !t) return true;
  return s.split('').sort().join('') === t.split('').sort().join('');
};

var s = "anagram", t = "nagaram";
console.log(`${s} & ${t} => ${isAnagram(s, t)}`);