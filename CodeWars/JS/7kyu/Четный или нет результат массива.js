function oddOrEven(array) {
    //enter code here
   let z = [];  
   if (array == 0 || array == null) {
     return 'even';
   }
   else if (array.reduce((x, y) => x + y) % 2 === 0) {
     return 'even';
   }
   else {
     return 'odd'
   }
   console.log()
 }