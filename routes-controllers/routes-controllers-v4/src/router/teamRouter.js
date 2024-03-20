const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController');

router.get('/', teamController.getTeamList);
router.get('/:teamId', teamController.getTeamDetail);
router.post('/', teamController.addTeam);
router.put('/:teamId', teamController.updateTeam);
router.delete('/:teamId', teamController.deleteTeam);

module.exports = router;
