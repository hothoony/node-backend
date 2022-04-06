const express = require('express');
const aboutController = require('../controllers/AboutController');

const router = express.Router();

router.get('/about', aboutController.get);
router.get('/about-me', (req, res) => {
    res.redirect('/about');
});

module.exports = router;
