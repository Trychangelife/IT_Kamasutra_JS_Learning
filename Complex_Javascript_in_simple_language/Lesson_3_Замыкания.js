// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
// const calc = createCalcFunction(42)
// Вызываем уже без параметра, так как параметр был передан ранее (выше)
// calc()



// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
//  }


//  const addOne = createIncrementor(1)
//  const addTen = createIncrementor(10)
// // Здесь мы разные переменные можем подставлять к одной функции, вместо того, чтобы писать много разных функций.
//  console.log(addOne(10))
//  console.log(addOne(41))
//  console.log(addTen(10))


function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}


// Создаем домен, который будет подключаться
const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

// Получаем основной стек ссылки
console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('vk'))
console.log(ruUrl('yandex'))
