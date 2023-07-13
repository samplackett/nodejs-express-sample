console.log('Express Tutorial')

// without express...
// const http = require('http');
// const { readFileSync } = require('fs');

// // get all req'd files
// const kenobi = readFileSync('./index.html');
// const homePage = readFileSync('./navbar-app/index.html');
// const homeStyles = readFileSync('./navbar-app/styles.css');
// const homeImage = readFileSync('./navbar-app/logo.svg');
// const homeLogic = readFileSync('./navbar-app/browser-app.js');

// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     const url = req.url;
//     console.log(url)
//     if (url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' });
//         res.write(homePage);
//         res.end();
//     } else if (url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' });
//         res.write(`<h2>Warra about page</h2>`);
//         res.end();
//     } else if (url === '/kenobis-army') {
//         res.writeHead(200, { 'content-type': 'text/html' });
//         res.write(kenobi);
//         res.end();
//     // next ones are styles etc
//     } else if (url === '/styles.css') {
//         res.writeHead(200, { 'content-type': 'text/css' });
//         res.write(homeStyles);
//         res.end();
//     } else if (url === '/logo.svg') {
//         res.writeHead(200, { 'content-type': 'image/svg+xml' });
//         res.write(homeImage);
//         res.end();
//     } else if (url === '/browser-app.js') {
//         res.writeHead(200, { 'content-type': 'text/javascript' });
//         res.write(homeLogic);
//         res.end();
//     } else {
//         res.writeHead(404, { 'content-type': 'text/html' });
//         res.write(`
//             <p>Great vase you've got there</p>
//             <p>It'd be a <i>real</i> shame if something happened to it...</p>
//             <h2>Whoops-y!</h2>
//         `);
//         res.end();
//     }
// });

// server.listen(5000);

// with express

// const express = require('express');
// const app = express();

// // options:
// // app.get
// // app.post
// // app.put
// // app.delete
// // app.all
// // app.use
// // app.listen

// app.get('/', (req, res) => {
//     console.log('user hit home page');
//     res.status(200).send('Home Page');
// });

// app.get('/about', (req, res) => {
//     console.log('user hit about page');
//     res.status(200).send('About Page');
// });

// app.all('*', (req,res) => {
//     console.log('user attempted to reach an undefined route');
//     res.status(404).send(`<p>Whoops-y</p>`);
// })

// app.listen(5000, () => {
//    console.log('server is listening on port 5000');
// });

// refined:

// const express = require('express');
// const path = require('path');

// const app = express();
// // set up static files and middleware
// app.use(express.static('./public'));

// // app.get('/', (req, res) => {
// //     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// // });
// //

// app.all('*', (req, res) => {
//     res.status(404).send('resource not found');
// });

// app.listen(5000, () => {
//     console.log('server listening on port 5000...');
// })

// json building
// const express = require('express');
// const app = express();
// const {products} = require('./data');

// app.get('/', (req, res) => {
//     res.send(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
// })

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product) => {
//         const {id, name, image} = product;
//         return {id, name, image}
//     })
//     res.json(newProducts);
// })

// app.get('/api/products/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const singleProduct = products.find((product) => product.id === id)
//     if (singleProduct) res.json(singleProduct);
//     else res.status(404).send(`<h1>Product not found</h1>`)
// })

// app.get('/api/products/:id/reviews/:reviewid', (req, res) => {
//     const id = Number(req.params.id);
//     const reviewId = Number(req.params.reviewid);
//     res.status(200).send(`oh go on then`)
// })

// app.get('/api/v1/query', (req, res) => {
//     const {search,limit} = req.query;
//     let sortedProds = [...products];
//     if (search) {
//         sortedProds = sortedProds.filter((prod) => prod.name.startsWith(search));
//     }
//     if (limit) {
//         sortedProds = sortedProds.slice(0, Number(limit));
//     }
//     if (sortedProds.length > 0) res.status(200).json(sortedProds);
//     else res.status(200).json({success: true, data: []})
// })

// app.listen(5000, () => {
//     console.log('server listening on port 5000...');
// })

// middleware

const express = require('express');
const path = require('path');
const app = express();
const logger = require('./logger');
const authorise = require('./authorise');
const morgan = require('morgan');

// req => middleware => res
// can be added individually or to all
// inidivdually:
// app.get('/', logger, (req, res) => {
//     res.send('home');
// })
// we can also uyse external ones such as morgan
//app.use([logger, authorise]); // first element of '/api' can be added -  means it will only apply on urls with /api - thus will ignore / and /about
// note these are triggered in order
// app.use(express.static('./public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/api/products', (req, res) => {
    res.send('products');
})

app.get('/api/items', [logger, authorise], (req, res) => {
    console.log(req.user)
    res.send('items');
})

app.listen(5000, () => {
    console.log('server listening on port 5000...');
})