"use strict";
// reverse enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 2] = "Up";
    Directions[Directions["Down"] = 4] = "Down";
    Directions[Directions["Left"] = 6] = "Left";
    Directions[Directions["Right"] = 8] = "Right";
})(Directions || (Directions = {}));
Directions.Up; // 2
Directions.Down; // 4
Directions[6]; // 'Left'
Directions[8]; // 'Right'
// Адекватный пример перечислений (ENUMS)
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));
//Using
links.vk; // 'https://vk.com/',
links.youtube; // 'https://youtube.com/',
//# sourceMappingURL=Enums%20(%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F).js.map