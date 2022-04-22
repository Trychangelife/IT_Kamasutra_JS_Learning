function index(array, n){
    //your code here
    let a = array[n];
    if (array.length <= n) {
      return -1
    }
    else {
    return Math.pow(a, n)
      }
  }