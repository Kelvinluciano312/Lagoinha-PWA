const express = require('express');
const path = require('path');
const { ensureAuthenticated } = require('../JS/authMiddleware.js');
const { sequelize, User } = require('../JS/db.js');

const router = express.Router();

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, './HTML/admin.html'), function (err) {
    if (err) {
      console.error(err);
      next(err);
    }
  });
});

router.get('/latest-images', function (req, res) {
  res.json({
    logo: '/logo.png',
    lagoHead: '/lagoHead.png',
    sideBar: '/sideBar.png',
  });
});

module.exports = router;
