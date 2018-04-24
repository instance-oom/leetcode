// https://leetcode.com/problems/subdomain-visit-count/description/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let countObj = {};
  for (let domain of cpdomains) {
    let arr = domain.split(' ');
    let count = parseInt(arr[0], 10);
    if (!countObj[arr[1]]) {
      countObj[arr[1]] = 0;
    }
    countObj[arr[1]] += count;

    let rootDomain = arr[1];
    let dotIndex = rootDomain.indexOf('.');
    while (dotIndex !== -1) {
      rootDomain = rootDomain.substr(dotIndex + 1);
      if (!countObj[rootDomain]) {
        countObj[rootDomain] = 0;
      }
      countObj[rootDomain] += count;
      dotIndex = rootDomain.indexOf('.');
    }
  }
  let result = [];
  for (let domain in countObj) {
    result.push(`${countObj[domain]} ${domain}`);
  }
  return result;
};

var cpdomains = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(cpdomains));

var cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains));