// https://leetcode.com/problems/string-compression/description/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  var len = chars.length;
  var i = 0;
  var start = 0;
  while (i < len) {
    var temp = chars[i];
    var j = i + 1;
    var count = 1;
    for (j; j < len; j++) {
      if (chars[j] === temp) {
        count++;
      } else {
        break;
      }
    }
    i += count;

    chars[start] = temp;
    if (count > 1) {
      var tempCountArr = count.toString().split('');
      for (var k = 0; k < tempCountArr.length; k++) {
        start++;
        chars[start] = tempCountArr[k];
      }
    }
    start++;
  }
  chars.length = start;
  return start;
};

var chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars), chars);

var chars = ["a"];
console.log(compress(chars), chars);

var chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
console.log(compress(chars), chars);
