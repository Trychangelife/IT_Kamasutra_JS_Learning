//Sumple object example

let user: any = {
    name: 'Yauhen',
    age: 30,
};

user = 'test'; // Сейчас тип переменной Юзер - строка.


let user: { name: string, age: number }= { //Здесь мы определили типы переменных, переопределить уже нельзя (Жесткая типизация)
    name: 'Yauhen',
    age: 30,
};

type Person = { name: string, age: number, nickName?: string, getPass?: () => string,}; // Универсальный набор для определения типа переменных


let admin: Person = {      // Тип Person можно применить сразу к нескольким объектам (DRY - DONT REPEAT YOURSELF)
    name: 'Max',
    age: 20,
    nickName: 'Mad',
}