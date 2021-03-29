const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // const checkArrays = [];
    if (arr.length === 0) return 1;

    const arrayAccum = new Array(arr.length).fill(1);

    const maxDepthArr = arr.reduce((accum, item, index) => {
      if (Array.isArray(item)) {
          
        accum[index] += this.calculateDepth(item);
        return accum;
      }
      
      return accum;
    }, arrayAccum);

    return arrayAccum.reduce((accum, item) => item > accum ? item : accum);
  }
};