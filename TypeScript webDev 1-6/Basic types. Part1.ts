typeof 42; //'number'
typeof 'str'; //'string'
typeof true; //'boolean'
typeof []; //'object'
typeof {}; //'object'
typeof null; //'object'
typeof undefined; //'undefined'
typeof Symbol(); // 'symbol'

// const
const nums = '42';
// Сменить тип уже не получится, будет ошибка.

//let
let num = 42;
num = 'hello'; //Ошибки нет - тип переменной изменен

//Boolean Type
let isCompleted: boolean = false;
// Изменить тип в настоящий момент НЕЛЬЗЯ

isCompleted = true; //Но можно изменить значение в буле

//Number Type
const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String Type
const name1: string = 'Yauhen';

// TS type
const u: undefined = undefined;
const u: null = null; //В JS это тип 'object' - в этом различие

//Void Type (Тип VOID пишется ПОСЛЕ скобочек) - Обозначает, то что функция НЕ возвращает что-либо (нет команды Return)
const greetUser = (): void => {
    alert("Hello, nice to see you!")
};




