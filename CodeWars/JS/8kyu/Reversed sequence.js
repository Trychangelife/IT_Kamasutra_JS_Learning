const reverseSeq = n => {
    let arr = [];
      let num1 = n;
      while (num1 != 0) {
        arr.push(num1);
        num1--;
      }
    return arr;
  };