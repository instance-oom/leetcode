// https://leetcode.com/problems/unique-morse-code-words/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morses = { "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--.." };
  let result = 0;
  let tempObj = {};
  for (let i = 0; i < words.length; i++) {
    let tempMorse = '';
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      tempMorse += morses[word[j]];
    }
    if (tempObj[tempMorse] === undefined) {
      result++;
      tempObj[tempMorse] = true;
    }
  }
  return result;
};

var words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));