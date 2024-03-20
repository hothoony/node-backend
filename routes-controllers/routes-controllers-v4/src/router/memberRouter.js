const express = require('express');
const router = express.Router();

const memberController = require('../controller/memberController');

router.get('/', memberController.getMemberList);
router.get('/:memberId', memberController.getMemberDetail);

module.exports = router;
