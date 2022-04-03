function find_average(array) {
    // your code here
    
    if (array == null || array.length < 1) {
      return 0;
    }
    else if (array === 0) {
      return 0;
    }
    else {
      var result = array.reduce((value, total) => value + total) / array.length;
      return result;
    }
  }