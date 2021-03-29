const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(boo = true) {
    
    this.state = false;
    if (boo === true) {
      this.state = true;
    }

    this.tabulaRecta = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    }
  }

  
  
  
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('!!!!!!!!two arguments required!!!!!!')
    }
    const checker = (char) =>{
      return char.replace(/[a-z]/, '') ? false : true;
    }
    
    const messageArrInitial = message.toLowerCase().split('');
    const messageArr = messageArrInitial.filter(char => checker(char));
    const keyArrInitial = key.toLowerCase().split('');
    const keyArr = keyArrInitial.filter(char => checker(char));

    let encryptedText = messageArr.reduce((accum, item, index) => {
      const keyCharIndex = index % key.length;
      const keyChar = keyArr[keyCharIndex];
      const cipherChar = this.tabulaRecta[item][this.tabulaRecta.a.indexOf(keyChar)]
      accum.push(cipherChar);
      return accum;
    }, [])

    let result = messageArrInitial.reduceRight((accum, item) => {
      if (checker(item)) {
        accum.push(encryptedText.pop());
        return accum;
      }

      accum.push(item);
      return accum;
    }, [])
    
    return this.state ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }    
  
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('!!!!!!!!two arguments required!!!!!!')
    }
    const checker = (char) =>{
      return char.replace(/[a-z]/, '') ? false : true;
    }
    
    const messageArrInitial = message.toLowerCase().split('');
    const messageArr = messageArrInitial.filter(char => checker(char));
    const keyArrInitial = key.toLowerCase().split('');
    const keyArr = keyArrInitial.filter(char => checker(char));

    

    let decryptedText = messageArr.reduce((accum, item, index) => {
      const keyCharIndex = index % key.length;
      const keyChar = keyArr[keyCharIndex];
      const originChar = this.tabulaRecta.a[this.tabulaRecta[keyChar].indexOf(item)]
      accum.push(originChar);
      return accum;
    }, [])

    let result = messageArrInitial.reduceRight((accum, item) => {
      if (checker(item)) {
        accum.push(decryptedText.pop());
        return accum;
      }

      accum.push(item);
      return accum;
    }, [])
    
    return this.state ? result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;