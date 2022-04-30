const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let s = "";
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        s += j.toString();
      }
      if (s.indexOf(j.toString()) == -1) {
        count += matrix[i][j];
      }
    }
  }
  return count;
  //   let arr = [[], [], [], []];
  //   let count = 0;
  //   for (let i = 0; i < matrix.length; i++) {
  //     let arr1 = [];
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       arr1[j].push(matrix[i][j]);
  //     }
  //     arr.push(arr1);
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     KEK: for (let j = 0; j < arr[i].length; j++) {
  //       if (arr[i][j] == 0) break KEK;
  //       count += arr[i][j];
  //     }
  //   }
  //   return count;

  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum,
};
