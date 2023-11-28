const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const sharp = require('sharp');
const passport = require('passport');
const { ensureAuthenticated } = require('./authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../lagoIMG'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});

const upload = multer({ storage: storage });

['logo', 'lagoHead', 'sideBar'].forEach((imagename) => {
  router.post('/lagoIMG/' + imagename, upload.single(imagename), (req, res, next) => {
    if (!req.file) {
      res.status(400);
      res.send('<html><head><meta http-equiv="refresh" content="3;url=/admin.html" /></head><body>No file uploaded. Redirecting...</body></html>');
      return;
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

router.get('/', ensureAuthenticated, function (req, res, next) {
  res.sendFile(path.join(__dirname, '../HTML/admin.html'), function (err) {
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