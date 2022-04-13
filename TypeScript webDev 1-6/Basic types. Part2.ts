// Array type
let list: number[] = [1, 2, 3];

let list1: Array<number>[] = [1, 2, 3]; // Generic type

// Tuple Type (Массив, но с несколькими типами данных)
// Multiple lines
let x: [string, number];
x = ['hello', 10];

//One line

let y: [string, number] = ['goodbye', 42]; //В одну линию

//Any Type
//Any Type for array
let y: [any, any] = ["goodbye", 42];
let z: [any, any] = [10, 'hello'];

//Any type for string

let notSure: any = false;

//Issue case (no error)
notSure = true;
notSure = 42;
notSure = 'hello';


// Enum Type
// Можно при необходимости переназначить!
enum Directions {
    up = 3,
    Down,
    Left,
    Right
}

// Never Type
// Functional return Error

const msg = 'Hello';
const error = (msg: string): never => {
    throw new Error(msg);
};

// Functional infinite loop
const infinityLoop = (): never => {
    while (true) {

    }
};

//Object Type
const create = (o: object | null): void => { };

create(1); // Ошибка будет, неподходящий тип данных (незаявлен в описании объекта)
create('42'); // Ошибка будет, неподходящий тип данных (незаявлен в описании объекта)
create({ obj; 1 }) // Вроде будет норм

//Multiple types for one value
let id: number | string;

id = 10; // Может быть числом
id = '42'; // Может быть строкой
id = true; // НЕ может быть булем (так как не указано выше в свойствах переменной)


// Type

type Name = string; // Custom type creation
let id: Name; // Apply custom type

id = '42'; // Ошибки нет - это строка
id = 10; // Ошибка - так как это не является строкой


