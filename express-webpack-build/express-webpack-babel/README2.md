# node 프로젝트를 초기화한다
- package.json 이 생성된다
```bash
npm init -y
```

## 의존성 패키지 설치 - 운영
- node_modules 가 생성된다
```bash
npm install express \
            mongoose \
            bcrypt \
            cors \
            jsonwebtoken \
            multer
```

## 의존성 패키지 설치 - 개발
```bash
npm install --save-dev \
            @babel/cli \
            @babel/core \
            @babel/preset-env \
            babel-loader \
            webpack \
            webpack-cli \
            webpack-node-externals \
            nodemon \
            npm-run-all
```

## webpack 설치
```bash
npm install --save-dev \
            webpack \
            webpack-cli \
            webpack-node-externals
```
