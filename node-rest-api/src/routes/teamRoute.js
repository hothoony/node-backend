const express = require('express');

const teamController = require('../controllers/teamController');

const router = express.Router();

router.get('/teams', teamController.findAll);

module.exports = router;
