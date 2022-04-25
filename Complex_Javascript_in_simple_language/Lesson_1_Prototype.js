// Создание объекта классическим методом

// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function() {
//         console.log('Greet')
//     }
// }


// Более детально создание объекта (по сути, то же самое)

const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet')
    }
})



Object.prototype.sayHello = function() {
    console.log('Hello!')
}


person.sayHello();

const lena = Object.create(person)

// Добавили на верхний слой прототипа новое значение (оно идет приоритетным НАД значением прототипа)
lena.name = 'Elena'
