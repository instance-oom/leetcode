// https://leetcode.com/problems/bulls-and-cows/description/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0, cows = 0;
  let objS = {}, objG = {};
  let maxLength = Math.max(secret.length, guess.length);
  for (let i = 0; i < maxLength; i++) {
    let tempS = secret[i];
    let tempG = guess[i];
    if (tempS === tempG) {
      bulls++;
    } else {
      if (tempS !== undefined) {
        objS[tempS] ? (objS[tempS]++) : (objS[tempS] = 1);
      }
      if (tempG !== undefined) {
        objG[tempG] ? (objG[tempG]++) : (objG[tempG] = 1);
      }
    }
  }

  let keys = Object.keys(objG);
  for (let i = 0; i < keys.length; i++) {
    let tempG = keys[i];
    if (!objS[tempG] || !objG[tempG]) continue;
    cows += Math.min(objS[tempG], objG[tempG]);
  }

  return `${bulls}A${cows}B`;
};

console.log(getHint("1807", "7810"));
console.log(getHint("11231", "01112"));