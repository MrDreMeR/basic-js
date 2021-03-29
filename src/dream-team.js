const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const toString = Object.prototype.toString;
  const classCheck = object => toString.call(object);

  if (classCheck(members) !== '[object Array]') {
    
    return false;
  }

  let filteredArr = members.filter((item) => {
    
    return classCheck(item) === '[object String]' && +item !== 0;
  })
  filteredArr = filteredArr.map(item => item.trim().toUpperCase()).sort();
  
  return filteredArr.reduce((accum, item) => {

    return accum + item[0]
  }, '');
};