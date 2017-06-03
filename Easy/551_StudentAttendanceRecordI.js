// https://leetcode.com/problems/student-attendance-record-i/#/description

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  var result = true;
  var length = s.length;
  if (length > 1) {
    var aCount = 0;
    var lCount = 0;
    for (var i = 0; i < length; i++) {
      if (s[i] === 'A') {
        aCount++;
        if (aCount > 1) return false;
      }
      if (s[i] === 'L') {
        lCount++;
        if (s[i - 1] !== 'L') lCount = 1;
        if (lCount > 2) return false;
      }
    }
  }
  return result;
};

console.log(checkRecord(''));
console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'));
console.log(checkRecord('PPALLPA'));
console.log(checkRecord('PPALLPLLL'));