const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let array of matrix) {
    for (let el of array) {
      if (el === '^^') {
        count++;
      }
    }
  }
  return count;
};