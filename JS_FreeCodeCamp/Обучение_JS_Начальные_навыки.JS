const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

--------------------------------------
const myStr = "This is the start." + " This is the end."; // Change this line


--------------------------------------

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

--------------------------------------

// Only change code below this line
const myName = "Евгений";
const myStr = "My name is" + myName + "and I am well!" ;

--------------------------------------

// Change code below this line
const someAdjective = "good";
let myStr = "Learning to code is ";
myStr += someAdjective;

--------------------------------------
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


--------------------------------------

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


---------------------------------------
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

--------------------------------------
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


--------------------------------------
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

--------------------------------------
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line


--------------------------------------

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "my " + myNoun + " so " + myAdjective + " for " + myVerb + " lets_go  " + myAdverb + "."; // Change this line
// Only change code above this line


--------------------------------------

// Only change code below this line
const myArray = ["someword", 1];

--------------------------------------

// Only change code below this line
const myArray = [["someword", 1], ["doubleword", 2]];

--------------------------------------


const myArray = [50, 60, 70];
const myData = myArray[0];

--------------------------------------

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line


--------------------------------------

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

--------------------------------------

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
--------------------------------------
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();

--------------------------------------
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();


--------------------------------------
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);


--------------------------------------

const myList = [["chocolate", 15], ["Milk", 20], ["Bread", 10], ["Apple", 12], ["Orange", 11]];

--------------------------------------

function reusableFunction() {
  console.log("Hi World")
}
reusableFunction();


--------------------------------------

function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
};
functionWithArgs(3, 16);
--------------------------------------

function timesFive(a) {
  return a * 5;
}

const answer = timesFive();


--------------------------------------

// Declare the myGlobal variable below this line

let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


--------------------------------------

function myLocalScope() {
  // Only change code below this line
  const myVar = 10;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


--------------------------------------


// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

--------------------------------------
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


--------------------------------------

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
  console.log(processed);

--------------------------------------

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

--------------------------------------

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  var removed = arr.shift()
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

----------------------------------------------

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

----------------------------------------------


function trueOrFalse(wasThatTrue) {
  // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true"
    }
    return "No, that was false"

  // Only change code above this line

}
----------------------------------------------

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

----------------------------------------------


// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

----------------------------------------------

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

----------------------------------------------

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
----------------------------------------------

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

----------------------------------------------

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

----------------------------------------------

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

------------------------------------------------
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
------------------------------------------------
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return 'Tiny'
  } 
  else if (num < 10) {
    return 'Small'
  }
  else if (num < 15) {
    return 'Medium'
  }
  else if (num < 20) {
    return 'Large'
  }
  else if (num >= 20) {
    return 'Huge'
  }
  return "Change Me";
  // Only change code above this line
}

testSize(7);

------------------------------------------------

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}

-------------------------------------

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    if (strokes == 1) {
      return "Hole-in-one!";
    }
    else if (strokes <= par - 2) {
      return "Eagle";
    }
    else if (strokes <= par - 1) {
      return "Birdie";
    }
    else if (strokes <= par) {
      return "Par";
    }
    else if (strokes <= par + 1) {
      return "Bogey";
    }
    else if (strokes <= par + 2) {
      return "Double Bogey";
    }
    else  {
      return "Go Home!";
    }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

-------------------------------------------------------------------------

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
   switch(val) {
    case 1:
     return "alpha";
     break;
    case 2:
     return "beta";
     break;
    case 3:
     return "gamma";
     break;
    case 4:
     return "delta";
     break;

   }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

--------------------------------------------------------------------------

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
    switch (val) {
      case "a":
      return ("apple");
      break;
      case "b":
      return ("bird");
      break;
      case "c":
      return ("cat");
      break;
      default:
      return ("stuff");
      break;
    }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
-------------------------------------------------------------------------

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
     return "Low";
     break;
     case 4:
    case 5:
    case 6:
     return "Mid";
     break;
     case 7:
    case 8:
    case 9:
     return "High";

  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

---------------------------------------------------------------------------
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

---------------------------------------------------------------------------
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
if (count > 0) {
  return count + " Bet";
} else {
  return count + " Hold";
}

------------------------------------------------------------------------------