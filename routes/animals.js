const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/animals');

router.get('/mammals', AnimalController.mammals);


module.exports = router;
