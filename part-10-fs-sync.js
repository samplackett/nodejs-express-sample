const {readFileSync, writeFileSync} = require('fs');
console.log('letsago');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result of ${first}, ${second}`, {flag: 'a'}) // flag a appends rather than replaces
console.log('mischief managed');
console.log('allons-y!');