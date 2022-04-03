function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) {
      return [];
    }
    else if (input === 0) {
      return input;
    }
    else {
      var withOutZero = input.filter(x => x != 0);
      var positiveValues = withOutZero.filter(y => y > 0).length;
      var negativeValues = withOutZero.filter(y => y < 0);
      var summNegativeValues = negativeValues.reduce((total, value) => total + value)
      var totalArr = [positiveValues, summNegativeValues];
      return totalArr;
      }
  }