// read file
const { readFile } = require('fs');

console.log('started a new task');

// check the file path
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('starting next task');

// set timeout
setTimeout(() => {
    console.log('second task complete');
}, 0);
console.log('onto the third one');

// set interval
setInterval(() => {
    console.log('interval achieved');
}, 2000);
console.log('runs before the interval');

// server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello there!');
});

server.listen(5000, () => {
    console.log('Server listening on port 5000');
});

// example of a stuck page
const http = require('http');

const server2 = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page');
    } else if (req.url === '/about') {
        // this is a blocking loop - note all OTHER users also have to wait for this to be done
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About page');
    } else {
        res.end('Whoopsy');
    }
});

server2.listen(5000, () => {
    console.log('Server is ready on port 5000');
})