// create big file
const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
};

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
});

console.log('stream example');

const http = require('http');
const fs = require('fs');

http.
    createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8');
        // res.end(text);
        // gives a huge content length. the below will instead chunk it
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res)
        });
        fileStream.on('error', (err) => {
            res.end(err);
        });
    })
    .listen(5000)