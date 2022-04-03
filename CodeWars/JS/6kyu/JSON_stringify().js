function arraysSimilar(arr1, arr2) {
    // TODO: Implement your arraysSimilar 
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
  }