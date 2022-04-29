var humanYearsCatYearsDogYears = function(h) {
    // Your code here!
    let c = 0;
    let d = 0;
    if (h === 1) {
      c+= 15
      d+= 15
    }
    else if (h === 2) {
      c+= 24
      d+= 24
    }
    else {
      c = 24 + ((h-2)* 4)
      d = 24 + ((h-2) * 5)
    }
    return [h, c, d]
  }
  