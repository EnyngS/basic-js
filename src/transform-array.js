const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  //  return "'arr' parameter must be an instance of the Array!";
  let res = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-prev" || arr[i] == "--double-prev") continue;
    if (
      (arr[i] == "--double-next" || arr[i] == "--discard-next") &&
      !arr[i + 1]
    )
      break;
    if (arr[i + 1] == "--discard-prev") {
      continue;
    }
    if (arr[i + 1] == "--double-prev") {
      res.push(arr[i]);
      res.push(arr[i]);

      continue;
    }
    if (arr[i] == "--discard-next") {
      i++;

      continue;
    }
    if (arr[i] == "--double-next") {
      if (arr[i + 1]) {
        res.push(arr[i + 1]);
        continue;
      }
    }
    res.push(arr[i]);
  }
  return res;
  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
