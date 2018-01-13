// https://leetcode.com/problems/shortest-completing-word/description/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  var letters = {};
  for (var i = 0; i < licensePlate.length; i++) {
    var letter = licensePlate[i];
    var isChar = false;
    if (letter >= 'A' && letter <= 'Z') {
      letter = letter.toLowerCase();
      isChar = true;
    } else if (letter >= 'a' && letter <= 'z') {
      isChar = true;
    }
    if (isChar) {
      letters[letter] ? letters[letter]++ : letters[letter] = 1;
    }
  }

  var result;
  var minLength = Number.MAX_SAFE_INTEGER;
  var chars = Object.keys(letters);

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length >= minLength) continue;

    var tempLetters = {};
    for (var j = 0; j < word.length; j++) {
      var char = word[j];
      if (letters[char]) {
        tempLetters[char] ? tempLetters[char]++ : tempLetters[char] = 1;
      }
    }

    var isMatch = true;
    for (var k = 0; k < chars.length; k++) {
      var char = chars[k];
      if (!tempLetters[char] || letters[char] > tempLetters[char]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      minLength = word.length;
      result = word;
    }
  }

  return result;
};

var licensePlate = "1s3 PSt";
var words = ["step", "steps", "stripe", "stepple"]
console.log(shortestCompletingWord(licensePlate, words));

licensePlate = "1s3 456";
words = ["looks", "pest", "stew", "show"];
console.log(shortestCompletingWord(licensePlate, words));

licensePlate = "GrC8950";
words = ["measure", "other", "every", "base", "according", "level", "meeting", "none", "marriage", "rest"];
console.log(shortestCompletingWord(licensePlate, words));
