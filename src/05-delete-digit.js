/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const arr = [];
  const str = String(n);
  for (let i = 0; i < str.length; i++) {
    const strArr = str.split('');
    strArr.splice(i, 1);
    arr.push(strArr.join(''));
  }
  arr.sort((a, b) => b - a);
  return Number(arr[0]);
}

module.exports = deleteDigit;
