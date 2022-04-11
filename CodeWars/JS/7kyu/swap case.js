function swap(str){
    //code me
    let arr = str.split('');
    let arr2 = [];
        arr.forEach((n) => {
      if ((n === n.toLowerCase()) === true) {
        arr2.push(n.toUpperCase());
      }
      else if ((n === n.toUpperCase()) === true) {
        arr2.push(n.toLowerCase());
      }
      else {
        arr2.push(n);
      }
    })
    return arr2.join('');
  }
  