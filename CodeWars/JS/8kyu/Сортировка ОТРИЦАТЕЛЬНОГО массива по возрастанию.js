function highAndLow(numbers) {
    let sort;
    let result = "";
    let array = numbers.split(" ").map(n => parseInt(n, 10));  // this map makes them numbers
    sort = array.sort((a, b) => {
      if (a > b) {
        return 1;
      } else return -1;
    });
    result = sort[sort.length - 1] + " " + sort[0];
    return result;
  
  }





  // Еще одно решение

  function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ');
    return Math.max.apply(null, arr) + " " + Math.min.apply(null, arr);
  }