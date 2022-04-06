const express = require('express');
const lodash = require('lodash');
const morgan = require('morgan');
const aboutRoute = require('./routes/AboutRoute')
const mongoose = require('mongoose');

mongoose.connect('mongodb://myuser:test1234@localhost:27017/admin', {
    dbName: 'mydb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(result => {
    console.log(result);
    console.log('connected to db');
    app.listen(3000);
})
.catch(err => {
    console.error(err);
});

// express app
const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// app.listen(3000);

// app.use(morgan('combined'));
// app.use(morgan('dev'));
// app.use(morgan('tiny'));
app.use(morgan('common'));

app.use(express.static(`${__dirname}/public`));

// // middleware > request logging
// app.use((req, res, next) => {
//     console.log(new Date(), req.method, req.url, req.ip, req.hostname);
//     next();
// });

// // middleware > auth check
// app.use((req, res, next) => {
//     console.log('auth chedck');
//     next();
// });

app.get('/', (req, res) => {
    const boards = [
        {no: 1, title: '제목1', date: '2022-03-01'},
        {no: 2, title: '제목2', date: '2022-03-02'},
        {no: 3, title: '제목3', date: '2022-03-03'},
    ];
    res.render('index', {title: 'index 페이지', boards});
});

app.use(aboutRoute);

// middleware > 404
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Not Found'});
});
