# node.js express 앱을 webpack 으로 빌드하기

## 프로젝트 만들기
```bash
yarn init -y
```

## 프로젝트 파일
- src/index.ts
- package.json
- webpack.config.js
- tsconfig.js

## 의존성 설치 - 운영
- express 설치
```bash
yarn add express @types/express
yarn add dotenv
```

## 의존성 설치 - 개발
```bash
# webpack 설치
yarn add webpack webpack-cli --dev

# typescript 설치
yarn add ts-loader typescript --dev

yarn add @types/node --dev
yarn add webpack-node-externals --dev
yarn add nodemon webpack-shell-plugin --dev
yarn add jest supertest @types/jest ts-jest --dev
yarn add ts-node --dev
```

# 프로젝트 실행
```bash
# 개발환경 실행
$ yarn run-dev

# 운영환경 실행
$ yarn run-prd
```

# 프로젝트 빌드
```bash
# 개발환경 빌드
$ yarn build-ev

# 운영환경 빌드
$ yarn build
```

node 18

npm install webpack-node-externals --save-dev

nodemon --watch config --watch src/server src/server/main
