## 패키지를 설치한다
```bash
npm install sequelize
npm install mariadb # mariaDB 사용시 설치한다
npm install dotenv

# webpack 설치
npm install -D webpack
npm install -D webpack-cli
npm install -D webpack-node-externals
```
- sequelize-cli 를 global 로 설치하고 명령어를 확인한다
```bash
$ npm install sequelize-cli --global

$ sequelize -v
Sequelize CLI [Node: 16.20.2, CLI: 6.6.2, ORM: 6.37.1]
```

# sequelize 사용하기
- sequelize 를 초기화한다
```bash
$ sequelize init
```
- 아래 디렉토리가 생성된다
```
.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
└── seeders
```

- ## DB 설정 파일
  - `config.json` 이 sequelize 가 기본적으로 제공하는 DB 설정 파일이다
  - `config.json` 은 모듈로 로드해서 사용할 수 없기 때문에 `config.js` 로 변경해서 dotenv 와 조합해서 사용한다

- ## 모델 생성하기

```bash
sequelize model:generate --name User --attributes user_id:integer,user_name:string
```

```bash
sequelize model:generate --name User --attributes user_id:integer,user_name:string

Sequelize CLI [Node: 16.20.2, CLI: 6.6.2, ORM: 6.37.1]

New model was created at /Volumes/mydata/personal/github/node-backend/sequelize-orm/models/user.js .
New migration was created at /Volumes/mydata/personal/github/node-backend/sequelize-orm/migrations/20240323042926-create-user.js
```

- models/user.js 파일이 생성된다
```bash
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
```

# dotenv 사용하기

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

## database 생성하기
```bash
sequelize db:migrate
```
