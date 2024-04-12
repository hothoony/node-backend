# 프로젝트 생성하기
```shell
npm init -y
```

<br>

# 패키지를 설치하기
```bash
npm install sequelize
npm install mariadb # mariaDB 사용시 설치한다
npm install dotenv

# webpack 설치
npm install -D webpack
npm install -D webpack-cli
npm install -D webpack-node-externals
npm install -D dotenv-webpack # webpack 으로 빌드할 때 .env 파일을 포함시킬 수 있다
```
- sequelize-cli 를 global 로 설치하고 명령어를 확인한다
```bash
$ npm install sequelize-cli --global

$ sequelize -v
Sequelize CLI [Node: 16.20.2, CLI: 6.6.2, ORM: 6.37.1]
```

<br>

# dotenv 사용하기

## .env 파일을 환경별로 각각 만든다

- `.env.development`
  ```bash
  # 개발 DB
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_USERNAME=myuser
  DB_PASSWORD=testDB1234
  DB_DATABASE=mydb
  ```

- `.env.production`
  ```bash
  # 운영 DB
  DB_HOST=prd-host
  DB_PORT=prd-port
  DB_USERNAME=prd-user
  DB_PASSWORD=prd-pass
  DB_DATABASE=prd-db
  ```

## 환경 설정에 맞는 파일을 로딩하도록 수정한다
```javascript
// require('dotenv').config({path: `${__dirname}/.env.${process.env.NODE_ENV}`});
require('dotenv').config({path: `./.env.${process.env.NODE_ENV}`});
```

## 실행시에 `NODE_ENV` 에 환경 정보를 입력한다
```bash
# 개발환경 실행
$ NODE_ENV=development node index.js

# 운영환경 실행
$ NODE_ENV=production node index.js
```

<br>

# `.env`
- `.env` 파일을 webpack 으로 빌드할 때 포함하지 않으면
  - `.env` 파일을 서버에 배포해야 한다
- `.env` 파일을 webpack 빌드시 포함하면
  - `.env` 파일을 서버에 배포하지 않아도 된다

<br>

# webpack 사용하기

- ## 아래 2개 설정을 넣어준다
  - 빌드할 때 node_modules 폴더를 제외시킨다
  ```
  const nodeExternals = require('webpack-node-externals');
  ```

  - 빌드할 때 `.env` 파일을 포함시킨다 (빌드에 포함할지 여부를 확인필요)
  ```
  const Dotenv = require('dotenv-webpack');
  ```

- ## webpack.config.js
```javascript
const path = require('path');
// const { webpack } = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

// process.env 에서 NODE_ENV 를 가져온다
const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    name: 'sequelize-build-app',
    mode: NODE_ENV, // development, production
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        app: ['./index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: `index-${NODE_ENV}.js`
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
              context: __dirname
            }
        }),
        new Dotenv({
            path: `./.env.${NODE_ENV}`,
        }),
    ],
    externalsPresets: { node: true },
    externals: [ nodeExternals() ]
}
```


<br>

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
  - `config.json` 파일 대신 `config.js` 파일을 사용한다
  - sequelize 가 기본적으로 사용하는 DB 설정 파일은 `config.json` 이다
  - `config.json` 은 모듈로 로드할 수 없기 때문에 `config.js` 로 변경하고 `dotenv` 와 조합해서 사용한다

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

## database 생성하기
```bash
sequelize db:migrate
```
