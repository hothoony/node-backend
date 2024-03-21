const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const upload = multer({ dest: 'uploads/' });

// profileFile 이름의 파일 1개 + 텍스트 param 여러 개
app.post('/upload1', upload.single('profileFile'), function(req, res, next) {
    console.log('upload1');
    console.log('req.file', req.file);
    console.log('req.files', req.files);
    console.log('req.body', req.body);
    console.log('req.body.jsonData', req.body.jsonData);
    console.log('req.body.jsonData2', req.body.jsonData2);
    res.send('OK');
});

// profileFile 이름의 파일 2개 + 텍스트 param 여러 개
app.post('/upload2', upload.array('profileFile', 2), function(req, res, next) {
    console.log('upload2');
    console.log('req.file', req.file);
    console.log('req.files', req.files);
    console.log('req.body', req.body);
    console.log('req.body.jsonData', req.body.jsonData);
    console.log('req.body.jsonData2', req.body.jsonData2);
    res.send('OK');
});

// profileFile 이름의 파일 2개
// logoFile 이름의 파일 1개
// 텍스트 param 여러 개
app.post('/upload3', upload.fields([
    {name: 'profileFile', maxCount: 2},
    {name: 'logoFile', maxCount: 1},
]), function(req, res, next) {
    console.log('upload3');
    console.log('req.file', req.file);
    console.log('req.files', req.files);
    console.log('req.body', req.body);
    console.log('req.body.jsonData', req.body.jsonData);
    console.log('req.body.jsonData2', req.body.jsonData2);
    res.send('OK');
});

app.listen(3000, function() {
    console.log('server is running on port 3000');
});
