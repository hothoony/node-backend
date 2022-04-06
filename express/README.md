## instructions
```
npm init -y
npm i express
npm i --save-dev nodmon
npm i ejs
npm i express-ejs-layouts
```

## package.json
### scripts 에 devStart 추가
```
  "scripts": {
    "devStart": "nodemon server.js"
  }
```

## ejs
```
npm i ejs
```
```
app.set('view engine', 'ejs');
```

node js, router, controller
