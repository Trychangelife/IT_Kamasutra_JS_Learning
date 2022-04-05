function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const arr = numbers.filter((num) => num > 0).sort((a, b) => a - b);
    return arr[0] + arr[1];
  }