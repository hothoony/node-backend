const express = require('express');
const app = express();

// console.log('__dirname', __dirname);
// console.log('__filename', __filename);

// require('dotenv').config({path: `${PROJ_BASE}/env/production.env`});
require('dotenv').config({path: `${__dirname}/../profile/${process.env.NODE_ENV}.env`});

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.app_port', process.env.app_port);
console.log('process.env.db_host', process.env.db_host);

app.listen(process.env.app_port, (error) => {
    console.log(`server is listening on port ${process.env.app_port}`);
});
