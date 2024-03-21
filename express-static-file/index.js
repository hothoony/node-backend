const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('static'));

app.get('/', function(req, res) {
    res.status(200);
    res.send('OK');
});

app.listen(3000, function() {
    console.log('server is running on port 3000');
});
