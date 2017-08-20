// https://leetcode.com/problems/replace-words/#/description

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  var dicObj = {};
  for (var i = 0; i < dict.length; i++) {
    var temp = dict[i];
    var templen = temp.length;
    if (dicObj[templen] == undefined) {
      dicObj[templen] = {};
    }
    dicObj[templen][temp] = 1;
  }

  var arr = sentence.split(' ');
  var arrLen = arr.length;
  for (var j = 0; j < arrLen; j++) {
    var temp = arr[j];
    var templen = arr[j].length;
    for (var k = 0; k < templen; k++) {
      if (dicObj[k + 1] === undefined) continue;
      var sub = temp.substring(0, k + 1);
      if (dicObj[k + 1][sub] === 1) {
        arr[j] = sub;
        break;
      }
    }
  }
  return arr.join(' ');
};

var dict = ["cat", "bat", "rat"];
var sentence = "the cattle was rattled by the battery";
var except = "the cat was rat by the bat";
console.log(except === replaceWords(dict, sentence));