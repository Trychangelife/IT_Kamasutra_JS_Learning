function arraySum(arr) {
    // sum ALL the things!
    let result = arr.toString().split(',');
    let result2 = result.map(parseFloat).filter(x => !Number.isNaN(x));
    return (result2.reduce((x, y) => x + y))
  }
  