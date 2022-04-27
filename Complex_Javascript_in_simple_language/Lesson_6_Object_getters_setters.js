// Создаем объект PERSON через Object.create (он принимает в себя 2 параметра - объекта)
const person = Object.create({}, {
    name: {
        value: 'Evgeniy',
        //Параметр отвечающий за видимость объекта на внешке (по умолчанию FALSE)
        enumerable: true,
        // Возможность изменения (по умолчанию FALSE)
        writable: true,
        // Предоставили возможность удалить этот параметр (NAME) (по умолчанию FALSE)
        configurable: true

    },
    birthYear: {
        value: 1996,
    },
    age: {
        enumerable: true,
        //Метод GET позволяет нам внутри параметра AGE произвести над ним определенную операцию (тут мы вычисляем возраст)
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        // Ну тут че-то ХЗ каким-то образом делаем фон красным, если вдруг передаем какое-либо значение в AGE
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})
// Здесь мы изменили параметр объекта (который заранее задали как изменяемый)
// person.name = 'Maxim'

// Удалили параметр объекта (заранее разрешили это делать)
// delete person.name 

person.age

for (let key in person) {
    // Ставим условие, что пробегаемся только по объекту НЕ влезая в прототип
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}