typeof 42; //'number'
typeof 'str'; //'string'
typeof true; //'boolean'
typeof []; //'object'
typeof {}; //'object'
typeof null; //'object'
typeof undefined; //'undefined'
typeof Symbol(); // 'symbol'

// const
const num = '42';
// Сменить тип уже не получится, будет ошибка.

//let
let num = 42;
num = 'hello'; //Ошибки нет - тип переменной изменен

