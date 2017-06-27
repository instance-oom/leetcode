// https://leetcode.com/problems/minimum-index-sum-of-two-lists/#/description

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  var list1Len = list1.length;
  var list2Len = list2.length;
  if (list1Len > list2Len) {
    var temp = list1;
    list1 = list2;
    list2 = temp;
  }

  var find = [];
  var sum;
  for (var i = 0; i < list1.length; i++) {
    var item = list1[i];
    var index = list2.indexOf(item);
    if (index === -1) continue;
    if (sum === undefined || sum > i + index) {
      find = [item];
      sum = i + index;
    } else if (sum === (i + index)) {
      find.push(item);
    }
  }
  return find;
};

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
var list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
console.log(findRestaurant(list1, list2));

list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
list2 = ["KFC", "Shogun", "Burger King"];
console.log(findRestaurant(list1, list2));

list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"];
console.log(findRestaurant(list1, list2));

list1 = ["k", "KFC"];
list2 = ["k", "KFC"];
console.log(findRestaurant(list1, list2));

list1 = ["nfeau", "KFC"];
list2 = ["KFC"];
console.log(findRestaurant(list1, list2));
