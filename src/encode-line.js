const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let c = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      c++;
    } else {
      arr.push(c == 1 ? "" : c);
      arr.push(str[i]);
      c = 1;
    }
  }
  return arr.join("");
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
