function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    var total = marks.reduce((total, value) => total + value) / marks.length;
    return Math.floor(total);
  }