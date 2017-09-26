// https://leetcode.com/problems/map-sum-pairs/description/

/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.store = {};
  this.prefixs = [];
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function (key, val) {
  if (!this.store[key]) {
    this.prefixs.push(key);
  }
  this.store[key] = val;
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function (prefix) {
  var len = this.prefixs.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    var temp = this.prefixs[i];
    if (temp.indexOf(prefix) === 0) {
      sum += this.store[temp];
    }
  }
  return sum;
};

/** 
* Your MapSum object will be instantiated and called as such:
* var obj = Object.create(MapSum).createNew()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/


var a = new MapSum();
a.insert("apple", 3);
console.log(a.sum("ap"));
a.insert("app", 2)
console.log(a.sum("ap"));