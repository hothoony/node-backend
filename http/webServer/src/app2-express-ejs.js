const express = require('express');
const lodash = require('lodash');

// express app
const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

// middleware, request logging
app.use((req, res, next) => {
    console.log(new Date(), req.method, req.url, req.ip, req.hostname);
    next();
});

// middleware, auth check
app.use((req, res, next) => {
    console.log('auth chedck');
    next();
});

app.get('/', (req, res) => {
    const boards = [
        {no: 1, title: '제목1', date: '2022-03-01'},
        {no: 2, title: '제목2', date: '2022-03-02'},
        {no: 3, title: '제목3', date: '2022-03-03'},
    ];
    res.render('index', {title: 'index 페이지', boards});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about 페이지'});
});

// redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Not Found'});
});
