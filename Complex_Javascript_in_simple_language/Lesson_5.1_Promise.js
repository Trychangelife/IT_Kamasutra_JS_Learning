// Описание логики при помощи обычной вложенности БЕЗ промисов, чем больше запросов, тем больше вложенность (ПЛОХО).
console.log('Request data...')
// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// Создали Promise с предполагаемой информацией от сервера
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

//Далее пошла цепочка действий, которая будет выполняться по очереди (при условии, что RESOLVE будет успешный).
//Суть в том, что вложенность минимальная
p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
// Тут мы анонсируем следующий шаг, используя информацию из промиса, в котором изменили DATA
}).then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
// Мы еще модифицировали ClientData, добавили параметр и теперь выводим уже измененную DATA дополнительно
}).then(data => {
    console.log('Modified', data)
})
// Ловим возможную ошибку, если будет ошибка, она будет выведена в консоль
.catch(err => console.error('Error: ', err))
// Команда которая выполняется ВНЕ зависимости, выполнены ли операции выше успешно
.finally(() => console.log('Finally'))



