// https://leetcode-cn.com/contest/weekly-contest-84/problems/find-and-replace-in-string/

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
  let result = '';
  let i = 0;
  while (i < S.length) {
    let index = indexes.indexOf(i);
    if (index === -1) {
      result += S[i];
    } else {
      let source = sources[index];
      let match = true;
      for (let j = 0; j < source.length; j++) {
        if (S[j + i] !== source[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        result += targets[index];
        i += source.length - 1;
      } else {
        result += S[i];
      }
    }
    i++;
  }
  return result;
};

var S = "abcd", indexes = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"];
console.log(findReplaceString(S, indexes, sources, targets)); //eeebffff

var S = "abcd", indexes = [0, 2], sources = ["ab", "ec"], targets = ["eee", "ffff"];
console.log(findReplaceString(S, indexes, sources, targets)); //eeecd