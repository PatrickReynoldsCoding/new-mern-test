const express = require('express');
const router = express.Router();



router.get('/mammals', (req, res) => {
const animals = [
'donkey',
'tiger',
'lion'
]

res.json(animals);
})

module.exports = router;
