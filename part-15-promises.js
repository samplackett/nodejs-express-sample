const { readFile, writeFile } = require('fs');
// use promise
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

getText('./content/first.txt')
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// use async await
const start = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}
start();

// now simplify this down using util
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const improvedStart = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise(
            './content/result-part-15.txt',
            `Awesome! ${first} ${second}`
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
improvedStart();

// we can tidy down even more!
const fs = require('fs').promises;
const readFilePr = fs.readFile;
const writeFilePr = fs.writeFile;

const bestStart = async () => {
    try {
        const first = await readFilePr('./content/first.txt', 'utf8');
        const second = await readFilePr('./content/second.txt', 'utf8');
        await writeFilePr(
            './content/result-part-15-best.txt',
            `This is the best it could possibly be! ${first} ${second}`,
            { flag: 'a' }
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
bestStart();