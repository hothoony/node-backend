const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/blogs/add', blogController.save);
router.get('/blogs/', blogController.find);
router.get('/blogs/:id', blogController.findById);
router.get('/blogs/:id/update', blogController.update);
router.get('/blogs/:id/delete', blogController.deleteOne);

module.exports = router;
