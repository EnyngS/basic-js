const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let base16 = "0123456789ABCDEF";
  n = n.split("-").join("").split("");
  for (let i of n) {
    if (base16.indexOf(i) == -1) {
      return false;
    }
  }
  return true;
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address,
};
