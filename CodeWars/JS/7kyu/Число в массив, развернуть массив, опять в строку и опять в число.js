function descendingOrder(n){
    //...
    var intArr = Array.from(String(n));
    var result = intArr.sort((a, b) => a-b).reverse().join('');
    return result * 1;
  }