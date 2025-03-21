const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  let arr = matrix.flat();
  for (let i of arr) {
    i == "^^" ? ++count : "";
  }
  return count;
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats,
};
