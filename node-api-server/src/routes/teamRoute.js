const express = require('express');
const { findAll } = require('../controller/teamController');

const router = express.Router();

router.get('/', findAll);

module.exports = router;
