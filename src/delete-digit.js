const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString().split("");
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    let arr = [...n];
    arr.splice(i, 1);
    +arr.join("") > max ? (max = +arr.join("")) : "";
  }
  return max;
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit,
};
