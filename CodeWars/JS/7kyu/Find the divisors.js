function divisors(integer) {
    let arr = [];
    let arr2 = [];
    for (let i = 1; i <= integer; i++) {
      arr.push(integer / i);
    }
    for (let e of arr) {
      if (Number.isInteger(e)) arr2.push(e);
    }
      if (arr2.length === 2) {
      return integer + ' is prime';}
    return arr2.slice(1, -1).reverse();
  };