const express = require('express');
const router = express.Router();
const memberController = require('../controller/memberController');

router.get('/', memberController.getMemberList);
router.get('/:memberId', memberController.getMemberDetail);
router.post('/', memberController.addMember);
router.put('/:memberId', memberController.updateMember);
router.delete('/:memberId', memberController.deleteMember);

module.exports = router;
