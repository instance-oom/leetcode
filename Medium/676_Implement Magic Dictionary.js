// https://leetcode.com/problems/implement-magic-dictionary/description/

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.pathStore = {};
};

/**
* Build a dictionary through a list of words 
* @param {string[]} dict
* @return {void}
*/
MagicDictionary.prototype.buildDict = function (dict) {
  var len = dict.length;
  for (var i = 0; i < len; i++) {
    var temp = dict[i];
    if (this.pathStore[temp.length] === undefined) {
      this.pathStore[temp.length] = [temp];
    } else {
      this.pathStore[temp.length].push(temp);
    }
  }
};

/**
* Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
* @param {string} word
* @return {boolean}
*/
MagicDictionary.prototype.search = function (word) {
  var wordLen = word.length;
  if (!this.pathStore[wordLen] || this.pathStore[wordLen].length === 0) return false;

  var len = this.pathStore[wordLen].length;
  for (var i = 0; i < len; i++) {
    var temp = this.pathStore[wordLen][i];

    var count = 0;
    for (var j = 0; j < wordLen; j++) {
      if (temp[j] === word[j]) continue;
      count++;
      if (count == 2) break;
    }

    if (count === 1) return true;
  }
  return false;
};

/** 
* Your MagicDictionary object will be instantiated and called as such:
* var obj = Object.create(MagicDictionary).createNew()
* obj.buildDict(dict)
* var param_2 = obj.search(word)
*/

var obj = new MagicDictionary();
obj.buildDict(["hello", "leetcode"]);

console.log(obj.search('hello'));   // false
console.log(obj.search('hhllo'));   // true
console.log(obj.search('hell'));    // false
console.log(obj.search('leetcoded')); // false

var obj = new MagicDictionary();
obj.buildDict(["hello", "hallo", "leetcode"]);
console.log(obj.search('hello'));   // true
console.log(obj.search('hhllo'));   // true
console.log(obj.search('hell'));    // false
console.log(obj.search('leetcoded')); // false