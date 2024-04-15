# node backend 프로젝트

## backend dependency 리스트
- `nodemon` server auto restart
- `express` web server
- `ejs` view template
- `winston` logging
- `morgan` logging
- `body-parser` request body parsing
- `mongoose` ODM(Object Document Mapping) library
- `dotenv` dev, prd profile 설정
- `cross-env` OS 상관없는 변수 설정

## dependency 설치

- ### dependencies
```bash
npm install express
npm install ejs
npm install dotenv
npm install cross-env
npm install winston
npm install winston-daily-rotate-file
npm install morgan
npm install mongoose
```

- ### devDependencies
```bash
npm install --save-dev nodemon -g
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev webpack-node-externals
```

## 모듈별 사용법
- ### express
    ```javascript
    // install
    npm install express --save
    ```
    ```javascript
    // app.js
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('index page');
    });

    app.listen(8080, function() {
        console.log('server start');
    });
    ```
    ```bash
    # usage
    node app.js
    ```

- ### nodemon
    ```javascript
    // install, 전역으로 설치
    sudo npm install nodemon -g
    ```
    ```javascript
    // usgae
    // 소스 파일이 수정되는 경우 서버를 자동으로 restart 해준다
    nodemon ./bin/www.js
    ```

- ### body-parser
    ```javascript
    // install
    npm install body-parser --save
    ```
    ```javascript
    // usage
    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    ```

- ### mongoose
    ```javascript
    const mongoose = require('mongoose');

    const dbURI = 'mongodb+srv://';
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log('connect to db');
            app.listen(3000);
        })
        .catch(err => console.error(err));
    ```

- ### ejs, view template
    ```javascript
    app.set('view engine', 'ejs');
    app.set('views', `${__dirname}/views`);
    ```

## middleware
- `app.use()`
```javascript
app.use(morgan('common'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
```

# 빌드
- webpack 을 설치한다
```bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev webpack-node-externals
```
- `webpack.config.js` 파일을 만든다
```javascript
// webpack.config.js

const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  mode: "production", // 빌드 모드
  target: "node",
  entry: {
    bundle: path.resolve(__dirname, "app.js"), // 앱 시작 파일
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js", // 빌드 최종 결과 파일
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  externalsPresets: {
    node: true,
  },
  externals: [nodeExternals()],
};
```
- `package.json` 에 `build` 를 추가한다
```json
// package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "develop": "NODE_ENV=development webpack",
    "build": "NODE_ENV=production webpack"
  },
```

# 배포
- 빌드해서 `bundle.js` 파일을 생성한다
- `.env` 파일과 `node_modules/` 디렉토리는 빌드로 묶지 않고 별도로 배포한다
- 배포해야 되는 최종 파일
```
bundle.js
.env
node_modules/
```
