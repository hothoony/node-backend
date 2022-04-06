const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    
    console.log(req.method, req.url);

    // res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>hello world 123</h1>');
    // res.end();

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            res.statusCode = 404;
            path += '404.html';
            break;
    }

    console.log('here');

    fs.readFile(path, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });  

});

server.listen(3000, 'localhost', () => {
    console.log('listening');
});
