const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === '/') res.end('Welcome to New York');
    else if (req.url === '/about') res.end('Tell me all about it');
    else res.end(`
        <h1>Woops-y!</h1>
        <p>Page not found</p>
        <a href="/">Home</a>
    `);
});

server.listen(5000);