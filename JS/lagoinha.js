const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    console.log('Received request for /');
    res.sendFile(path.join(__dirname, '../HTML/lagoinha.html'), function(err) {
      if (err) {
        next(err);
      }
    });
});
  
module.exports = router;