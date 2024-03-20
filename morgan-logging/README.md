## npm 패키지 설치
```bash
npm install express
npm install morgan
npm install moment-timezone # timezone 설정
```

## 실행
```bash
node src/server.js
```

## Predefined Formats
- app.use(morgan('combined'));
```bash
::1 - - [20/Mar/2024:06:07:38 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
::1 - - [20/Mar/2024:06:07:39 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
::1 - - [20/Mar/2024:06:07:39 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
```

- app.use(morgan('common'));
```bash
::1 - - [20/Mar/2024:06:08:18 +0000] "GET / HTTP/1.1" 304 -
::1 - - [20/Mar/2024:06:08:18 +0000] "GET / HTTP/1.1" 304 -
::1 - - [20/Mar/2024:06:08:18 +0000] "GET / HTTP/1.1" 304 -
```

- app.use(morgan('dev'));
```bash
GET / 304 2.079 ms - -
GET / 304 0.358 ms - -
GET / 304 0.259 ms - -
```

- app.use(morgan('short'));
```bash
::1 - GET / HTTP/1.1 304 - - 2.333 ms
::1 - GET / HTTP/1.1 304 - - 0.389 ms
::1 - GET / HTTP/1.1 304 - - 0.303 ms
```

- app.use(morgan('tiny'));
```bash
GET / 304 - - 1.973 ms
GET / 304 - - 0.373 ms
GET / 304 - - 0.256 ms
```
- app.use(morgan('[:date[iso]] :method :url :status :res[content-length] - :response-time ms'));
    - timezone: UTC
```bash
[2024-03-20T06:13:39.880Z] GET / 304 - - 1.937 ms
[2024-03-20T06:13:40.043Z] GET / 304 - - 0.426 ms
[2024-03-20T06:13:40.161Z] GET / 304 - - 0.252 ms
```

- app.use(morgan('[:date[Asia/Seoul]] :method :url :status :res[content-length] - :response-time ms'));
    - timezone: Asia/Seoul
```bash
# moment-timezon 을 설치한다
npm install moment-timezon
```
```javascript
const moment = require('moment-timezone');

// timezone 설정
morgan.token('date', (req, res, tz) => {
    return moment().tz(tz).format();
});

// timezone: Aisa/Seoul
app.use(morgan('[:date[Asia/Seoul]] :method :url :status :res[content-length] - :response-time ms'));
```
```bash
[2024-03-20T15:17:26+09:00] GET / 304 - - 2.154 ms
[2024-03-20T15:17:27+09:00] GET / 304 - - 0.358 ms
[2024-03-20T15:17:27+09:00] GET / 304 - - 0.253 ms
```