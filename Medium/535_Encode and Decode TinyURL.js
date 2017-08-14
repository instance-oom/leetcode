// https://leetcode.com/problems/encode-and-decode-tinyurl/description/

var obj = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var random = '';
  for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 62);
    random += chars[index];
  }
  var url = "http://tinyurl.com/" + random;
  obj[random] = longUrl;
  return url;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return obj[shortUrl.replace('http://tinyurl.com/', '')];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 var shortUrl = encode('http://dasdasd.newe');
 console.log(shortUrl);
 console.log(decode(shortUrl));