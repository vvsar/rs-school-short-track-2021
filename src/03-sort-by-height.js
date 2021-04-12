/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const ar = arr.slice();
  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] !== -1) {
      for (let j = i; j < ar.length; j++) {
        if (ar[j + 1] !== -1) {
          if (ar[i] > ar[j + 1]) {
            const temp = ar[i];
            ar[i] = ar[j + 1];
            ar[j = 1] = temp;
          }
        }
      }
    }
  }
  return ar;
}

module.exports = sortByHeight;
