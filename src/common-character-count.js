const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  s1 = s1.split("");
  s2 = s2.split("");
  let i;
  let j;
  KEK: for (i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        ++count;
        s1.splice(i, 1);
        s2.splice(j, 1);
        i = -1;
        //   i = 0;
        //   j = 0;
        //   continue KEK;
      }
    }
  }
  return count;
  //   let set1 = Array.from(new Set([...s1.split()]));
  //   let set2 = Array.from(new Set([...s2.split()]));

  //   return (
  //     set1.length +
  //     set2.length -
  //     Array.from(new Set([...s1.split(), ...s2.split()])).length
  //   );

  //   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
};
