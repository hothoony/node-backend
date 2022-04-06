const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

router.get('/members', memberController.getMembers);
router.get('/members/create',  memberController.createMember);
router.get('/members/:id', memberController.getMember);
router.get('/members/:id/update', memberController.updateMember);
router.get('/members/:id/delete', memberController.deleteMember);

module.exports = router;
