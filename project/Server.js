const http = require('http')
let requestsCount = 0

// Import modules
const favicon = require('serve-favicon');
const express = require('express')
const app = express()

// Returns a middleware to serve favicon
app.use(favicon('D:/Учеба/WebStorm/project/favicon.ico'));

// API endpoint to serve index
app.get('/', (_, res)=> res.sendFile('D:/Учеба/WebStorm/project/index.html'))

// Start the server
app.listen(3000);

const server = http.createServer((request, response) => {
    requestsCount++

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 NOT FOUND')
    }
    response.write(' IT-KAMASUTRA' + requestsCount)
    response.end()
})

server.listen(3003)