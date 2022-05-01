const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  static count = 1;
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
    this.count = 1;
  }
  c = (arr) => arr.some((i) => Array.isArray(i));
  calculateDepth(arr) {
    let count = 1;
    if (this.c(arr)) {
      let arr1 = arr.reduce((prev, next) => prev.concat(next), []);
      return count + this.calculateDepth(arr1);
    }
    return count;
    //  KEK: for (let i = 0; i < arr.length; i++) {
    // if (Array.isArray(arr[i])) {
    //   arr = arr.flat();
    //   ++count;
    //   return this.calculateDepth(arr);
    //   i = 0;
    //   continue KEK;

    //   break;

    //   i = 0;
    //   ++res;
    //   arr = arr.flat();
    //   continue KEK;
    // }

    //  count += this.count;
    //  this.count = 0;
    //  return count;

    //  let a = c(arr);
    //  return a;
  }
}

module.exports = {
  DepthCalculator,
};
