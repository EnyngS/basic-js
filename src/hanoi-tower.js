const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let r = 3;

  for (i = 2; i < disksNumber; i++) {
    r = r * 2 + 1;
  }
  let s = Math.floor((3600 / turnsSpeed) * r);
  //   throw new NotImplementedError('Not implemented');
  return { turns: r, seconds: s };
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi,
};
