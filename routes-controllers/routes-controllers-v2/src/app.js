const express = require('express');
const memberRouter = require('./routes/memberRouter');

const app = express();

const port = 3000;

const content = (() => {
    let str = '';
    str += '<a href="/">/</a><br>';
    str += '<a href="/members">/members</a><br>';
    str += '<a href="/members/create">/members/create</a><br>';
    str += '<a href="/members/123">/members/id</a><br>';
    str += '<a href="/members/123/update">/members/id/update</a><br>';
    str += '<a href="/members/123/delete">/members/id/delete</a><br>';
    return str;
})();

app.get('/', (req, res) => {
    // res.send(content);

    res.write('<h1>v2</h1>');
    res.write(content);
    res.end();
});

app.use(memberRouter);

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`server is listening on port ${port}`);
    }
});
