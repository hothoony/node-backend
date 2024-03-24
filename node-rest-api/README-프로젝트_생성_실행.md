### 프로젝트 생성
- `npm init -y` 명령으로 프로젝트를 생성한다.
-  프로젝트가 생성되면 `package.json` 파일이 생성된다
```bash
mkdir node-rest-api
cd node-rest-api
npm init -y
```

### 패키지를 설치한다
```shell
node install express # 웹서버
# node install body-parser # express 에 포함됨
node install cors
node install helmet # 보안
npm install multer # multipart/form-data 처리
npm install axios # api 콜
npm install bcrypt # 암호화
npm install jsonwebtoken # JWT
npm install nodemailer # smtp

# DB orm
npm install sequelize # orm

# logging
node install morgan # 로깅
node install winston # 로깅
npm install winston-daily-rotate-file # 데일리 로깅
npm install moment-timezone # timezone 처리

# profile 처리
npm install dotenv
npm install cross-env

# webpack
npm install -D webpack
npm install -D webpack-cli
npm install -D webpack-node-externals # webpack 빌드시 node_modules 제외시킬 수 있다
npm install -D dotenv-webpack # webpack 빌드시  .env 파일을 포함시킬 수 있다

# tdd
npm install mocha --save-dev
npm install should --save-dev
npm install supertest --save-dev
```

### 소스코드 작성
- `src/index.js` 파일을 만든다
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // cors 제한없음
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// 미들웨어 등록
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send({title: 'Hello world 123'});
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});

```

### node 로 실행
```shell
$ node src/index.js
hello node
listening on port 3001
::1 - - [27/Mar/2023:02:34:24 +0000] "GET / HTTP/1.1" 200 29 "-" "PostmanRuntime/7.31.3"
::1 - - [27/Mar/2023:02:34:24 +0000] "GET / HTTP/1.1" 200 29 "-" "PostmanRuntime/7.31.3"
::1 - - [27/Mar/2023:02:34:25 +0000] "GET / HTTP/1.1" 200 29 "-" "PostmanRuntime/7.31.3"
```

### nodemon 으로 실행
- nodemon 을 전역으로 설치한다설치
```shell
$ sudo npm install -g nodemon
```
- nodemon 으로 app 을 실행한다
```shell
$ nodemon src/index.js
```
