const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listens for events
// emit - emits a certain event

customEmitter.on('response', (name, isJedi) => {
    console.log(`data has been received: user ${name} with Jedi status ${isJedi}`);
});
customEmitter.on('response', () => {
    console.log(`some other logic`);
});
customEmitter.emit('response', 'general kenobi', true);

// now with booted server
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Hello there!');
});
server.listen(5000);