var isSquare = function(n){
    var powD = Math.sqrt(n);
    if (n < 0) {
      return false;
    }
    else if (Number.isInteger(powD) === true  || n === 0) {
      return true;
    }
    else {
      return false;
    }
    console.log(powD);
  }


//   Как пишут нормальные люди на CW
//   function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }