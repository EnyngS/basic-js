const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!arguments.length) return "Unable to determine the time of year!";
  if (Object.getPrototypeOf(date).constructor !== Date)
    throw new Error("Invalid date!");
  if (Object.prototype.toString.call(date) !== "[object Date]")
    throw new Error("Invalid date!");
  //   let t = date.getTime();
  //   if (isNaN(Date.parse(data))) throw new Error("Invalid date!");
  let res;
  try {
    res = date.getMonth();
    date.getTime();
    if (!arguments.length) return "Unable to determine the time of year!";
    if (Object.getPrototypeOf(date).constructor !== Date)
      throw new Error("Invalid date!");
    if (Object.prototype.toString.call(date) !== "[object Date]")
      throw new Error("Invalid date!");
    if (Object.prototype.toString.call(date) == "[object Date]") {
      if (res < 2 || res == 11) return "winter";
      if (res > 1 && res < 5) return "spring";
      if (res > 4 && res < 8) return "summer";
      return "autumn";
    } else throw new Error("Invalid date!");
  } catch (e) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
