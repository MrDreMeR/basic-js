const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == null) {return 'Unable to determine the time of year!'}

  const toString = Object.prototype.toString;
  const classChecker = object =>  toString.call(object);

  if (classChecker(date) !== '[object Date]') {
    throw new Error('!!!!!!!!!invalide argument type!!!!!!!!');
  }

  const year = date.getFullYear();
  const springBorder = new Date(year, 2, 1);
  const summerBorder = new Date(year, 5);
  const autumnBorder = new Date(year, 8);
  const winterBorder = new Date(year, 11);

  if (date < springBorder) {
    return 'winter';
  }
  if (date < summerBorder) {
    return 'spring';
  }
  if (date < autumnBorder) {
    return 'summer';
  }
  if (date < winterBorder) {
    return 'autumn';
  }

  return 'winter';
};