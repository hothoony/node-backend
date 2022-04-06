const express = require('express');
const lodash = require('lodash');

// express app
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    console.log(req.method, req.url);
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>hello</h1>');
    res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', {root: __dirname});
});

// redirect
app.get('/about-me', (req, res) => {
    // res.statusCode = 301;
    // res.setHeader('Location', '/about');
    // res.end();
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile('./public/404.html', {root: __dirname});
});
