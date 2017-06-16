// https://leetcode.com/problems/valid-parentheses/#/description

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var length = s.length;
  if (length % 2 !== 0) return false;
  var obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  var arr = [];
  for (var i = 0; i < length; i++) {
    var temp = s[i];
    if (!obj[temp]) {
      arr.push(temp);
    } else {
      var popValue = arr.pop();
      if (obj[temp] !== popValue) {
        return false;
      }
    }
  }
  return arr.length === 0;
};

var s = '[';
console.log(`'${s}' => ${isValid(s)}`);

var s = '((';
console.log(`'${s}' => ${isValid(s)}`);

var s = '()[]{}';
console.log(`'${s}' => ${isValid(s)}`);

var s = '([)]';
console.log(`'${s}' => ${isValid(s)}`);

var s = '[]';
console.log(`'${s}' => ${isValid(s)}`);

var s = '[{([[()]])}]';
console.log(`'${s}' => ${isValid(s)}`);