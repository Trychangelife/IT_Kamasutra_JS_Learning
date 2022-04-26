const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}


// sleep(2000).then(() => console.log('after 2 sec'))
// sleep(3000).then(() => console.log('after 3 sec'))


// Промисы выполняются пачкой, результат выводится ТОЛЬКО ПОСЛЕ выполнения всех промисов.
Promise.all([sleep(2000), sleep(5000)])
.then(() => {
    console.log('All promises')
})


// Будет выполнен самый БЫСТРЫЙ промис и выведен.
Promise.race([sleep(2000), sleep(5000)])
.then(() => {
    console.log('Race promises')
})