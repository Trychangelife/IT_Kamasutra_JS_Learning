function bmi(weight, height) {
    var resultBmi = weight / (height * height);
    if (resultBmi <= 18.5) {
      return "Underweight"
    }
    else if (resultBmi <= 25.0) {
      return "Normal"
    }
    else if (resultBmi <= 30.0) {
      return "Overweight"
    }
    else if (resultBmi > 30) {
      return "Obese"
    }
  }