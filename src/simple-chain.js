const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  arr1: [],
  getLength() {
    return chainMaker.arr.length;
  },
  addLink(value) {
    chainMaker.arr.push(`( ${String(value)} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position != "number") {
      chainMaker.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position - 1 >= 0 && position - 1 < chainMaker.arr.length) {
      chainMaker.arr.splice(position - 1, 1);
      return chainMaker;
    } else {
      chainMaker.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    chainMaker.arr.reverse();
    return chainMaker;
  },
  finishChain() {
    chainMaker.arr1 = chainMaker.arr;
    chainMaker.arr = [];
    // let a = chainMaker.arr.splice()
    //  .splice(0, chainMaker.arr.length)
    return chainMaker.arr1.join("~~");
  },
};

module.exports = {
  chainMaker,
};
