// reverse enum

enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

Directions.Up // 2
Directions.Down // 4
Directions[6] // 'Left'
Directions[8] // 'Right'



// Адекватный пример перечислений (ENUMS)
enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

//Using

links.vk  // 'https://vk.com/',
links.youtube // 'https://youtube.com/',
