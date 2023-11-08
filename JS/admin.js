const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, 'lagoIMG'))
  },
  filename: function(req, file, cb) {
    cb(null, req.params.imagename + path.extname(file.originalname))
  }
});


const upload = multer({ storage: storage });

['logo', 'lagoHead', 'sideBar'].forEach(imagename => {
  router.post('/lagoIMG/' + imagename, upload.single(imagename), (req, res) => {
    res.redirect('/admin.html');
  });
});


router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../HTML/admin.html'));
});

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../CSS/admin.css'));
});

module.exports = router;