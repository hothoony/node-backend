const express = require('express');
<<<<<<< HEAD
const { findAll } = require('../controller/teamController');

const router = express.Router();

router.get('/', findAll);
=======
const teamController = require('../controllers/teamController');

const router = express.Router();

router.get('/teams', teamController.findAll);
>>>>>>> a436adcf7d24cca071a6caf54484c3da3685cab7

module.exports = router;
