const {userName: user, sayHi } = require('./Test');
const name = 'Tommy';
const os = require('os');


console.log(user)
console.log(sayHi(name))

console.log(os.platform(), os.release())
module.exports = name;