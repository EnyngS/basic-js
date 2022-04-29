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
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    this.calculateDepth(arr);
    let count = 1;

    KEK: for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arr = arr.flat();
        ++count;
        this.calculateDepth(arr);
        i = 0;
        continue KEK;

        //   break;

        //   i = 0;
        //   ++res;
        //   arr = arr.flat();
        //   continue KEK;
      }
    }
    return count;

    let a = c(arr);
    return a;
  }
}

module.exports = {
  DepthCalculator,
};
