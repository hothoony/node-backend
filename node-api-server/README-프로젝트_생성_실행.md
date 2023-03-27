### 프로젝트 생성
- 프로젝트 폴더를 만든다 `mkdir node-api-server`
- `npm init -y` 으로 프로젝트를 생성한다
- 프로젝트를 생성하면 `package.json` 파일이 생성된다

### 모듈을 설치한다
```shell
node install express
node install body-parser
node install cors
node install helmet
node install morgan
```

### 소스코드 작성
- 소스코드 폴더륾 만든다 `mkdir src`
- `index.js` 파일을 만든다
```javascript
console.log('hello node');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const ads = [
    {title: 'Hello world 123'}
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send(ads);
});

app.listen(3001, () => {
    console.log('listening on port 3001');
});

```

### node 실행
```shell
$ node src/index.js
hello node
listening on port 3001
::1 - - [27/Mar/2023:02:34:24 +0000] "GET / HTTP/1.1" 200 29 "-" "PostmanRuntime/7.31.3"
::1 - - [27/Mar/2023:02:34:24 +0000] "GET / HTTP/1.1" 200 29 "-" "PostmanRuntime/7.31.3"
::1 - - [27/Mar/2023:02:34:25 +0000] "GET / HTTP/1.1" 200 29 "-" "PostmanRuntime/7.31.3"
```
