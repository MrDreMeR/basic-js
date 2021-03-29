const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;
  if (repeatTimes === 1) {
      separator = '';
  }
  if (addition === undefined) {
      addition,  additionSeparator = '';
      additionRepeatTimes = 0;
  }
  
  if (additionRepeatTimes === 1) {
      additionSeparator = '';
  }
  
  let result = '';
  let additionString = `${addition}${additionSeparator}`;

  for (let i = 0; i < repeatTimes; i++) {
      result += str;
      for (let j = 0; j < additionRepeatTimes; j++) {
          if (j === additionRepeatTimes - 1) {
              result += addition;
              continue;
          }
          result += additionString;
      }
      if (i === repeatTimes -1) {
          continue;
      }
      result += separator;
  }

  return result 
};