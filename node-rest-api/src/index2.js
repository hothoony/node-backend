console.log('hello node');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const teamRoute = require('./routes/teamRoute');
const memberRoute = require('./routes/memberRoute');
const { isEmpty } = require('./utils/util');

const app = express();
const router = express.Router();

// middleware
app.use(helmet());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

// interceptor
app.use((req, res, next) => {
    console.log('');
    console.log('## interceptor');

    console.log('req.url =', req.url);

    // header
    let authorization = req.header('Authorization');
    console.log('  authorization =', authorization);
    authorization = null;

    if (isEmpty(authorization)) {
        res.status(401).json({
            message: 'unauthorized user',
        });
    }

    next();
}, (req, res, next) => {
    console.log('## interceptor 2');
    next();
});

// // interceptor 2
// router.all('/', (req, res, next) => {
//     console.log('router.all #1');
//     next();
// }, (req, res, next) => {
//     console.log('router.all #2');
//     next();
// });

// route
app.use('/api/v1', memberRoute);
app.use('/api/v1', teamRoute);

// port
const SERVER_PORT = 3001;

app.listen(SERVER_PORT, () => {
    console.log('node server is running on port %i', SERVER_PORT);
});
