// https://leetcode.com/problems/number-of-segments-in-a-string/#/description

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim();
  if (!s) return 0;
  var segmentsCount = 1;
  var length = s.length;
  for (var i = 0; i < length; i++) {
    if (s[i] === ' ') {
      while (s[i] === ' ') {
        i++;
      }
      segmentsCount++;
    }
  }
  return segmentsCount;
};

// Use Splite
var countSegments2 = function (s) {
  s = s.trim();
  if (!s) return 0;
  return s.split(/\s+/).length;
};

var s = 'Hello, my name  is John';
console.time('Normal');
console.log(countSegments(s));
console.timeEnd('Normal');

console.time('Use Splite');
console.log(countSegments2(s));
console.timeEnd('Use Splite');