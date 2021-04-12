/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  const result = {};
  const dmns = domains.slice();
  for (let i = 0; i < dmns.length; i++) {
    dmns[i] = dmns[i].split('.').reverse();
  }
  function addResultElement() {
    let n = 1;
    for (let j = 0; j < dmns.length - 1; j++) {
      if (dmns[j][0] === dmns[j + 1][0]) n++;
      result[`${dmns[j][0]}`] = n;
    }
  }
  addResultElement();
  let count = 0;
  for (let i = 0; i < dmns.length; i++) {
    count += dmns[i].length;
  }
  while (count > dmns.length) {
    for (let i = 0; i < dmns.length; i++) {
      if (dmns[i].length !== 1) {
        dmns[i][0] = `${dmns[i][0]}.${dmns[i][1]}`;
        dmns[i].splice(1, 1);
        count--;
      }
    }
    addResultElement();
  }

  return result;
}

module.exports = getDNSStats;
