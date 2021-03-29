const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultArr: [],
  tempArr: [],

  toString(value){
      return Object.prototype.toString.apply(value);
  },

  getLength() {
      return this.tempArr.length;
  },
  addLink(value) {
      if (this.toString(value) === '[object Object]') {
          this.tempArr.push('[object Object]');
          return this;
      }
      this.tempArr.push(`${value}`);
      return this;
  },
  removeLink(position) {
      if (this.toString(position) === '[object Number]' && (position > 0 && position <= this.tempArr.length)) {
          if (position === 1 && this.tempArr.length === 0) {
            return this;
          }
          this.tempArr.splice(position - 1, 1);
          return this;
      }
      this.tempArr = [];
      throw new Error('!!!!!!!!wrong position argument');
  },
  reverseChain() {
      this.tempArr.reverse();
      return this;
  },
  finishChain() {
      this.resultArr = [...this.tempArr];
      this.tempArr = [];
      return this.resultArr.reduce((accum, item, index, arr) => {
          if (index === arr.length - 1) {
              return accum += `( ${item} )`;
          }
          return accum += `( ${item} )~~`
      }, '')
  }
};

module.exports = chainMaker;