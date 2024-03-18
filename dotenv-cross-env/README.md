# dotenv 와 cross-env 로 프로파일 관리하기

## dotenv
- 환경 설정을 `.env` 파일로 관리한다
- 프로젝트 실행시 `NODE_ENV` 변수에 profile 을 셋팅한다
```json
  "scripts": {
    "dev": "NODE_ENV=development nodemon src/index.js",
    "prd": "NODE_ENV=production nodemon src/index.js"
  },
```

## cross-env
- 환경 변수 설정은 OS 별로 다르다
- 환경 설정 앞에 `cross-env` 를 추가한다
```json
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon src/index.js",
    "prd": "cross-env NODE_ENV=production nodemon src/index.js"
  },
```

## dotenv 와 cross-env 설치
```bash
npm install dotenv
npm install cross-env -g
```

## `.env` 파일 내용

- ### `.env`
    ```bash
    API_PORT=3000
    ```

- ### `.env-development`
    ```bash
    API_HOST=http://dev-hos
    ```

- ### `.env-production`
    ```bash
    API_HOST=http://prd-host
    ```

## index.js
- ### 개발 환경인 경우
    - `.env`, `.env-development` 파일을 로딩한다
- ### 운영 환경인 경우
    - `.env`, `.env-production` 파일을 로딩한다
```javascript
if (process.env.NODE_ENV === 'development') {
    dotenv.config(); // .env
    dotenv.config({ path: './.env-development' });
} else if (process.env.NODE_ENV === 'production') {
    dotenv.config(); // .env
    dotenv.config({ path: './.env-production' });
} else {
    console.log('invalid NODE_ENV');
}
```
