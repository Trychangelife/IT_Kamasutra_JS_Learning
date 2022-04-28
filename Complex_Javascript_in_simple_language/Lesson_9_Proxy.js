// Object

const person = {
    name: 'Evgeniy',
    age: 25,
    job: 'Back-end'
}

// Первым объектом передается цель на которую вешаем Proxy, вторым 
const op = new Proxy(person, {
    // Возвращает значение?
    get(target, prop) {
        console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    // Тут чет не особо понял
    set(target, prop, value) {
        if (prop in target) {
        target[prop] = value}
        else {
            throw new Error (`No ${prop} field in target`)
        }
    },
    // Проверить имеет ли объект это свойство
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    // Конструкция позволяющая удалить какой-нибудь элемент из прокси объекта
    deleteProperty(target, prop) {
        console.log('Del:', prop)
        delete target[prop]
    }
})

