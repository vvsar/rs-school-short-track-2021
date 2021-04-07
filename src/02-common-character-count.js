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
  // throw new Error('Not implemented');
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let n = 0;
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i] === arr2[j]) {
        n += 1;
        arr2.splice(j, 1);
        break;
      }
    }
  }
  return n;
}
module.exports = getCommonCharacterCount;
