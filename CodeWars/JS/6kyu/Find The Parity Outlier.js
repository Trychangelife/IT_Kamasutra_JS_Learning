function findOutlier(integers){
    //your code here
    let arr = integers.filter((x) => (x % 2) === 0).join('');
    let arr2 = integers.filter((x) => (x % 2) > 0 || (x % 2) < 0).join('');
    if (arr.length > arr2.length) {
      return Number(arr2);
      }
    else {
      
      return Number(arr);
    }
    
  }