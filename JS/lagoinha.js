// Importing required modules
const express = require('express');
const router = express.Router();
const path = require('path');

// Route for serving the lagoinha page
router.get('/', function(req, res, next) {
    console.log('Received request for /');
    res.sendFile(path.join(__dirname, '../HTML/lagoinha.html'), function(err) {
      if (err) {
        next(err);
      }
    });
});
  
module.exports = router;
