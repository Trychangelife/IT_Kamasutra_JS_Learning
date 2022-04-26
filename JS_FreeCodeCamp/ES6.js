
// Зафризили объект от изменения

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  // Стрелочная функция

  const magic = () => {
    return new Date();
  };


  // Сложение массивов с синтаксическим сахаром

  const myConcat = (arr1, arr2) =>  {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));

  // 

  // Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

// Если количество аргументов неизвестно, но нужно применить MAP, FiLTER, REDUCE

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}


// Сразу несколько переменных создаем из объекта.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;



//

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
// Only change code above this line


//
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Only change code above this line


// Плохо понятный метод Slice в виде ES6

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);