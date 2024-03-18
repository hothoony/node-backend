# node backend 프로젝트

## backend dependencies 리스트
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
```

## dependency 사용
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
