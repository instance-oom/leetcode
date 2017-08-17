// https://leetcode.com/problems/first-bad-version/description/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var isBadVersion = function (version) {
  return version > 7;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var low = 0;
    var high = n;
    var firstBad;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      if (isBadVersion(mid)) {
        high = mid - 1;
        firstBad = mid;
      } else {
        low = mid + 1;
      }
    }
    return firstBad;
  };
};

for (var i = 0; i < 10; i++) {
  var n = Math.floor(Math.random() * 100);
  console.log(n, solution(isBadVersion)(n));
}