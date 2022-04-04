function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var averageClassPoints = (classPoints.reduce((x, y) => x + y) + yourPoints) / (classPoints.length + 1);
    if (averageClassPoints < yourPoints) {
      return true;
    }
    else {
      return false;
    }
    console.log(averageClassPoints);
  }
  