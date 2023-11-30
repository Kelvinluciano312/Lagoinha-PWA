const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const { ensureAuthenticated } = require('../JS/authMiddleware.js');
const { sequelize, SequelizeStore, User } = require('../JS/db.js');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './lagoIMG/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});

const upload = multer({ storage: storage });

['logo', 'lagoHead', 'sideBar'].forEach((imagename) => {
  router.post(`/lagoIMG/${imagename}`, upload.single(imagename), (req, res, next) => {
    if (!req.file) {
      res.status(400);
      return res.send('<html><head><meta http-equiv="refresh" content="3;url=/admin.html" /></head><body>No file uploaded. Redirecting...</body></html>');
    }
    sharp(req.file.path)
      .toFormat('png')
      .toFile(req.file.path + '.png', (err, info) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Server error');
        }
        res.redirect('../admin.html');
      });
  });
});

module.exports = router;
