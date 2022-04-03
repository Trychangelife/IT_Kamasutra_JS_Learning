function isDivisible(n, x, y) {
    var firstSumm = n % x;
    var secondSumm = n % y;
    if (firstSumm === 0 && secondSumm === 0) {
      return true;
    }
    else {
      return false;
    }
  }