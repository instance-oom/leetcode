// https://leetcode.com/problems/judge-route-circle/description/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var len = moves.length;
  var hor = 0;
  var ver = 0;
  for (var i = 0; i < len; i++) {
    var char = moves[i];
    switch (char) {
      case 'U':
        hor++;
        break;
      case 'D':
        hor--;
        break;
      case 'R':
        ver++;
        break;
      case 'L':
        ver--;
        break;
    }
  }
  return hor === 0 && ver === 0;
};

console.log(judgeCircle('UD'));
console.log(judgeCircle('LL'));
console.log(judgeCircle('LLRDRU'));