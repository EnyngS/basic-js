const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arrAdd = [];
  let arr = [];
  for (
    let i = 0;
    i < (options.additionRepeatTimes ? options.additionRepeatTimes : 1);
    i++
  ) {
    arrAdd.push(
      options.hasOwnProperty("addition") ? String(options.addition) : ""
    );
  }
  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
    arr.push(str + arrAdd.join(options.additionSeparator || "|"));
  }
  return arr.join(options.separator || "+");
  // let res= str+
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
