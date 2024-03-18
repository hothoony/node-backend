const path = require('path');
const dotenv = require('dotenv');

// dotenv.config();
dotenv.config({ path: './.env-development' });
// dotenv.config({path: `${__dirname}/../.env.${process.env.NODE_ENV}`});

if (process.env.NODE_ENV === 'development') {
    dotenv.config(); // .env
    dotenv.config({ path: './.env-development' });
} else if (process.env.NODE_ENV === 'production') {
    dotenv.config(); // .env
    dotenv.config({ path: './.env-production' });
} else {
    console.log('invalid NODE_ENV');
}

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('API_HOST', process.env.API_HOST);
console.log('API_PORT', process.env.API_PORT);
