/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new Error('Not implemented');
  const newNames = names.slice();
  const arr = [1];
  for (let i = 1; i < newNames.length; i++) {
    arr.push(1);
    for (let j = 0; j < i; j++) {
      if (newNames[i] === newNames[j]) {
        newNames[i] = `${newNames[i]}(${arr[i]})`;
        arr[i]++;
      }
    }
  }
  return newNames;
}

module.exports = renameFiles;
