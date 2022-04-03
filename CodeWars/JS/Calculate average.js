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




//   Нормальное решение с CW - но синтактически сложное
//   var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }