require('dotenv').config({path: `./.env.${process.env.NODE_ENV}`});
const env = process.env;

console.log('');
console.log('config.js, process.env.NODE_ENV', process.env.NODE_ENV);
console.log('config.js, .env file', `./.env.${process.env.NODE_ENV}`);

/* 개발 DB */
const development = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  dialect: "mariadb"
};

/* 운영 DB */
const production = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  dialect: "mariadb"
};

const test = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  dialect: "mariadb"
};

module.exports = { development, production, test };
