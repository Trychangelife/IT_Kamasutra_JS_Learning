function squareDigits(num){
    var arr = num.toString().split('');
    var result = arr.map(x => x * x);
    return result.join('') * 1;
  }