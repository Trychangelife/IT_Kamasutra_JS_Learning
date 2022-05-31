"use strict";
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
let isCompleted = false;
// Изменить тип в настоящий момент НЕЛЬЗЯ
isCompleted = true; //Но можно изменить значение в буле
//Number Type
const decimal = 6;
const integer = 7.10;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;
// String Type
const name1 = 'Yauhen';
// TS type
const u = undefined;
const u = null; //В JS это тип 'object' - в этом различие
//Void Type (Тип VOID пишется ПОСЛЕ скобочек) - Обозначает, то что функция НЕ возвращает что-либо (нет команды Return)
const greetUser = () => {
    alert("Hello, nice to see you!");
};
//# sourceMappingURL=Basic%20types.%20Part1.js.map