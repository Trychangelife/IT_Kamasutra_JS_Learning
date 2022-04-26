function hello() {
    console.log('hello', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Name is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd
    }
}

const lena = {
    name: 'Elena',
    age: 23
}


const fnLenaInfoLog = person.logInfo.bind(lena)('Frontend', '8-999-999-99-99')

fnLenaInfoLog






const array = [1, 2, 3, 4, 5]

// НЕ гибкий вариант массива

// function multBy (arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }


// Гибкий вариант с использованием Prototype и This
Array.prototype.multBy = function(n) {
      return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(5))


// Берем любой массив и уже к новому массиву применяем ту функцию которую сделали ранее.
console.log([5, 8, 12].multBy(6));