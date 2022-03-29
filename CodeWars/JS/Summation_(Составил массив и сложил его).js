var summation = function (num) {
    // Code here
    let arr = [];
    let num1 = num;
    while (num1 != 0) {
      arr.push(num1);
      num1--;
    }
    let full = arr.reduce((a,b)=>a+b);
    return full;
  }