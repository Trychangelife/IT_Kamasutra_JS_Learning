const myDog = {
    // Only change code below this line
     name: "Dog",
     legs: 4,
     tails: 1,
     "friends": ["cat", "chicken"]
  
    // Only change code above this line
  };


  // Доступ к свойствам объекта с помощью записи через точку 
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

  // Второй способ обращения через скобки
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj['an entree'];   // Change this line
  const drinkValue = testObj['the drink'];    // Change this line


  // Хуй проссышь зачем через скобки вызывать это
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line

  // Изменяем составляющую ключ-листа при помощи обращения через точку.
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = "Happy coder";


// Добавили в справочник новое свойство
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = "woof";


// Удаление значения (Отрубил хвост)
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  
  delete myDog.tails;
  


  function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp) == true ? obj[checkProp] : 'Not Found' ;
    // Only change code above this line
  }


  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Joel",
      "title": "Man",
      "release_year": 1955,
      "formats": [
        "CD",
        "8T",
        "LP"]
    }
  ];



  