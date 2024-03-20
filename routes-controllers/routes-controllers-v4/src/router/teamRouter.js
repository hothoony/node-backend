const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController');

router.get('/', teamController.getTeamList);
router.get('/:teamId', teamController.getTeamDetail);

module.exports = router;
