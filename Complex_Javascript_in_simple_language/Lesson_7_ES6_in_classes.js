// const animal =  {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// Тут мы создали какой-то родительский класс, от которого дальше будем создавать уже "подклассы"
class Animal {
    static type = 'ANIMAL'
    constructor (options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice() {
        console.log('I am Animal!')
    }
}
// Создаем своебразный подкласс
class Cat extends Animal {

    static type = "CAT"
    constructor(options) {
        //Ключевое слово супер, значит, что мы берем из родительского класса опции
        super(options)
        this.color = options.color
    }
    // Тут мы вызвали и родительский войс и сами еще свой добавили (будет выведено два)
    voice() {
        super.voice()
        console.log('I am cat')
    }
    // Реализуем тут геттер и теперь можем сделать такую минифункцию, для уточнения возраста объекта
    get ageInfo () {
        return this.age * 7
    }
    // Тут чет не особо понял, но в теории изменяем текущий возраст и далее уже в ГЕттер будет попадать другое число (мудро чересчур)
    set ageInfo(newAge) {
        this.age == newAge
    }
 }

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})


console.log(cat.ageInfo)