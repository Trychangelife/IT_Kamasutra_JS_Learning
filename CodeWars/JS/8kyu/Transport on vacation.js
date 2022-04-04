function rentalCarCost(d) {
    // Your solution here
    var arr = {};
    var costPerDay = 40;
    if (d < 7 && d >= 3) {
      return d * 40 - 20;
    }
    else if (d >= 7 ) {
      return d * 40 - 50;
    }
    else {
      return d * 40;
    }
  }