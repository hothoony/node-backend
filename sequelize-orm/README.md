## 패키지를 설치한다
```bash
npm install sequelize
npm install sequelize-cli
npm install dotenv
```

## .env 파일을 환경별로 각각 만든다

- `.env-development`
```bash
DB_HOST=dev-host
DB_PORT=dev-port
DB_USERNAME=dev-user
DB_PASSWORD=dev-pass
```

- `.env-production`
```bash
DB_HOST=prd-host
DB_PORT=prd-port
DB_USERNAME=prd-user
DB_PASSWORD=prd-pass
```

## 환경 설정에 맞는 파일을 로딩하도록 수정한다
```javascript
/*
    process.env.NODE_ENV 변수에 따라 파일을 다르게 로딩한다
    - .env-development
    - .env-production
*/
// require('dotenv').config({path: `${__dirname}/.env-${process.env.NODE_ENV}`});
require('dotenv').config({path: `./.env-${process.env.NODE_ENV}`});

console.log('DB_HOST', process.env.DB_HOST);
console.log('DB_PORT', process.env.DB_PORT);
console.log('DB_USERNAME', process.env.DB_USERNAME);
console.log('DB_PASSWORD', process.env.DB_PASSWORD);
```

## 실행시에 `NODE_ENV` 에 환경 정보를 입력한다
```bash
# 개발환경 실행
$ NODE_ENV=development node index.js

# 운영환경 실행
$ NODE_ENV=production node index.js
```
