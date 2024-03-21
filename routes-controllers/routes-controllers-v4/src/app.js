const express = require('express');
const memberRouter = require('./router/memberRouter')
const teamRouter = require('./router/teamRouter')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log('');
    console.log('- req.url', req.url);
    console.log('- req.query', req.query);
    console.log('- req.params', req.params);
    console.log('- req.body', req.body);
    next();
});

// router 를 404 나 ERR 보다 먼저 선언해준다
app.use('/members', memberRouter);
app.use('/teams', teamRouter);

// 404 처리
app.use((req, res, next) => {
    res.sendStatus(404);
    next();
});

// ERR 처리
app.use((err, req, res, next) => {
    res.sendStatus(500);
    res.send(err.message);
    next();
});

module.exports = app;
