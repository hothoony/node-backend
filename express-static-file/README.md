
## static 파일을 준비한다
```bash
public/img/cat.png
static/img2/giraffe.png
```
```
.
├── index.js
├── package.json
├── public
│   └── img
│       └── cat.png
└── static
    └── img2
        └── giraffe.png
```

## static 파일로 서비스할 디렉토리를 지정한다
```javascript
app.use(express.static('public'));
app.use(express.static('static'));
```

## 브라우저에서 확인한다
```
http://localhost:3000/img/cat.png
http://localhost:3000/img2/giraffe.png
```
