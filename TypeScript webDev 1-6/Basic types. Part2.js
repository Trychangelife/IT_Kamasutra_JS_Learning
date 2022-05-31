"use strict";
// Array type
let list = [1, 2, 3];
let list1 = [1, 2, 3]; // Generic type
// Tuple Type (Массив, но с несколькими типами данных)
// Multiple lines
let x;
x = ['hello', 10];
//One line
let y = ['goodbye', 42]; //В одну линию
//Any Type
//Any Type for array
let y = ["goodbye", 42];
let z = [10, 'hello'];
//Any type for string
let notSure = false;
//Issue case (no error)
notSure = true;
notSure = 42;
notSure = 'hello';
// Enum Type
// Можно при необходимости переназначить!
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 3] = "up";
    Directions[Directions["Down"] = 4] = "Down";
    Directions[Directions["Left"] = 5] = "Left";
    Directions[Directions["Right"] = 6] = "Right";
})(Directions || (Directions = {}));
// Never Type
// Functional return Error
const msg = 'Hello';
const error = (msg) => {
    throw new Error(msg);
};
// Functional infinite loop
const infinityLoop = () => {
    while (true) {
    }
};
//Object Type
const create = (o) => { };
create(1); // Ошибка будет, неподходящий тип данных (незаявлен в описании объекта)
create('42'); // Ошибка будет, неподходящий тип данных (незаявлен в описании объекта)
create({ obj, 1:  }); // Вроде будет норм
//Multiple types for one value
let id;
id = 10; // Может быть числом
id = '42'; // Может быть строкой
id = true; // НЕ может быть булем (так как не указано выше в свойствах переменной)
let id; // Apply custom type
id = '42'; // Ошибки нет - это строка
id = 10; // Ошибка - так как это не является строкой
//# sourceMappingURL=Basic%20types.%20Part2.js.map