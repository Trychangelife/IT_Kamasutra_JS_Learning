console.log('Start')
console.log('Start2')


// Эти функции выполнятся позже чем остальные (если мы сделаем таймер 0, то функция все равно выполниться ПОЗЖЕ всех команд без таймаута )
function timeout2sec () {
    console.log('timeout2sec')
}

setTimeout(function() {
    console.log('Inside timeout')
}, 2000)

setTimeout(timeout2sec, 3000)

console.log('End')