// Setup
const myArray = [];
let i = 5;
while (i > -1) {
  myArray.push(i);
  i--;
}

// Only change code below this line


// Setup
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
// Only change code below this line

// Setup
const myArray = [];
for (let i = 1; i < 10; i +=2) {
  myArray.push(i);
}

console.log(myArray);
// Only change code below this line


// Setup
const myArray = [];
for (let i = 9; i > 0; i-= 2) {
  myArray.push(i);
}

console.log(myArray)
// Only change code below this line



// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < 10; i++) {
  total+= myArr[0];
} 

console.log(total);
// Only change code below this line


// Setup
const myArray = [];
let i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 11)





function sum(arr, n) {
    // Only change code below this line
     if (n <= 0) {
       return 0;
     }
     else {
       return sum(arr, n - 1) + arr[n - 1];
     }
    // Only change code above this line
  }
  



  function randomFraction(n) {

    // Only change code below this line
  
    return Math.random(n);
  
    // Only change code above this line
  }

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }



  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
  }