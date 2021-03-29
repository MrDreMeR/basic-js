const CustomError = require("../extensions/custom-error");

module.exports = 
function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error('!!!!!!!!not an array!!!!!!!!')
  }

  const newArr = [...arr];
  // const newArr = arr.map(item => item);
  // console.log(newArr);

  const discarder = (item, index, array) =>{
      array[index] = '-';

      if (item === 'prev' && index !== 0) {
          array[index - 1] = '-';
          return;
      }

      if (item === 'next' && index !== array.length - 1) {
          array[index + 1] = '-';
      }
  }

  const doubler = (item, index, array) =>{
      if (item === 'prev' && index !== 0) {
          array[index] = array[index - 1];
          return;
      }

      if (item === 'next' && index !== array.length - 1) {
          array[index] = array[index + 1];
          return;
      }

      array[index] = '-';
  }

  const process = (item, index, array) => {
      const arr = item.split('-').filter(element => element);

      arr[0] === 'discard' ? discarder(arr[1], index, array) : doubler(arr[1], index, array);
  }

  const toString = Object.prototype.toString;

  const set = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];

  newArr.forEach((item, index, array) => {
      if (toString.call(item) === '[object String]' && set.includes(item) && item !== '-') {
          process(item, index, array);
      }
              
  })
  // console.log(arr)
  // console.log(newArr);

  return newArr.filter(item => item !== '-');
};