function arrayDiff(a, b) {
    let arr = [];
    let result = a.map((item, i) => {
      if (b.includes(item) === true) {
        return '';
      }
      else {
        arr.push(item);
      }
    })
    return arr;
  }