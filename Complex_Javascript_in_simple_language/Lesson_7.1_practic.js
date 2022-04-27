
// Создаем основной компонент, в котором организуем связь this.$el с селектором в HTML и пару функций (дым в глаза, просто вид имеет)
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide () {
        this.$el.style.display = 'none'
    }
    show () {
        this.$el.style.display = 'block'
    }
}

// Тут мы создаем класс BOX и наследуем от Компоненты возможность обращаться к селектору (IDшнику - если я не ошибаюсь)
class Box extends Component {
    constructor (options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}


// Наследуемся от BOX класса и берем оттуда возможность изменить например ФОН и Размер (а дальше уже задаем их в классе)
// селекторы при этом, ссылаются на IDшник в HTML файле
const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})
const box2 = new Box ({
    selector: '#box2',
    size: 120,
    color: 'blue'
})


class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle ({
    selector: '#circle',
    size: 90,
    color: 'green'
})


// Итоги, основная логика выносится к базовым классам (самые первые), а потом уже создаем объекты и наследуем от них базу
// Например возможность обращаться к селектору, а далее уже изменяем как нам нужно, под конкретный объект