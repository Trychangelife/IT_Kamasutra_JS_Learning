function getCount(str) {
    var vowelsCount = str.match(/[aeiou]/g);
    // enter your majic here
    return vowelsCount === null ? 0 : vowelsCount.length;
  }
  