const express = require('express');
const morgan = require('morgan');
const moment = require('moment-timezone');

const app = express();

// timezone 설정
morgan.token('date', (req, res, tz) => {
    return moment().tz(tz).format();
});

// app.use(morgan('combined'));
// app.use(morgan('common'));
// app.use(morgan('dev'));
// app.use(morgan('short'));
// app.use(morgan('tiny'));

// timezone: UTC
// app.use(morgan('[:date[iso]] :method :url :status :res[content-length] - :response-time ms'));

// timezone: Aisa/Seoul
app.use(morgan('[:date[Asia/Seoul]] :method :url :status :res[content-length] - :response-time ms'));

app.get('/', function(req, res) {
    res.send('OK 123');
});

module.exports = app;
