"use strict";
// Function example
const createPassword = (name, age) => `${name}${age}`;
createPassword('Jack', 31); //'Jack31'
// Arguments type
const createPassword = (name, age) => `${name}${age}`;
createPassword('Jack', 31); // 'Jack31'
createPassword('Jack', '31'); // 'Jack 31'
createPassword('Jack'); // Мы тут НЕ вызвали age, но ошибки не вызвано, потому что сделали эту составляющую "Опциональной" - теперь она может не вызываться.
//Rest
const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
//Rest type
const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React'); // "Jack, my skills are JS, ES6, React"
//# sourceMappingURL=Lesson%204%20(Functions).js.map