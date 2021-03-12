const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('', userController.list);
router.get('/create',userController.create);
router.post('/store',userController.store);
router.get('/edit/:id', userController.edit);
router.post('/update/:id',userController.update);
router.get('/delete/:id',userController.delete);

module.exports = router;