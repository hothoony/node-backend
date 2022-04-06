const express = require('express');

const router = express.Router();

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

router.get('/members', (req, res) => {
    res.write('<h1>member list</h1>');
    res.write(content);
    res.end();
});

router.get('/members/create', (req, res) => {
    res.write('<h1>member create form</h1>');
    res.write(content);
    res.end();
});

router.get('/members/:id', (req, res) => {
    res.write(`<h1>get member id ${req.params.id}</h1>`);
    res.write(content);
    res.end();
});

router.get('/members/:id/update', (req, res) => {
    res.write(`<h1>update member id ${req.params.id}</h1>`);
    res.write(content);
    res.end();
});

router.get('/members/:id/delete', (req, res) => {
    res.write(`<h1>delete member id ${req.params.id}</h1>`);
    res.write(content);
    res.end();
});

module.exports = router;
