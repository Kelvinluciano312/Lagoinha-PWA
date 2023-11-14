const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../HTML/admin.html'), function(err) {
      if (err) {
        next(err);
      }
    });
});
  
module.exports = router;