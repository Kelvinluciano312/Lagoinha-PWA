const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../HTML/lagoinha.html'));
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../CSS/lagoinha.css'));
});

module.exports = router;