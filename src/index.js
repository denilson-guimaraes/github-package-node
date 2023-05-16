/**
 * @param {number[]} array
 * @returns {number}
 */
function sumArrayNumber(array) {
  const result = array.reduce((prevValue, value) => prevValue + value, 0);
  return result;
}

module.export = {
  sumArrayNumber,
};
