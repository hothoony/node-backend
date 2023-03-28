const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

router.get('/members', memberController.findAll);
router.post('/members', memberController.saveMember);
router.patch('/members/:id', memberController.updateMember);

module.exports = router;
