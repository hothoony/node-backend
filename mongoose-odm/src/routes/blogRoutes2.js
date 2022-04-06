const express = require('express');
const blogController2 = require('../controllers/blogController2');

const router = express.Router();

router.post('/', blogController2.save);
router.get('/', blogController2.find);
router.get('/:id', blogController2.findById);
router.put('/:id', blogController2.update);
router.delete('/:id', blogController2.deleteOne);

module.exports = router;
