const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    fs.mkdir('./files', () => {
        fs.writeFile('./files/test2.txt', `${data} New text!`, () => {
            err ? console.log(err) : null;
        })
    })

})

setTimeout(() =>{
    if (fs.existsSync('./files/test2.txt')) {
    fs.unlink('./files/test2.txt', () => {});
    }
}, 4000)

setTimeout(() =>{
    if (fs.existsSync('./files')) {


    fs.rmdir('./files', () => {});
    }
}, 6000)