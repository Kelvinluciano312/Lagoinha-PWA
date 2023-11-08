const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'lagoIMG')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/lagoIMG', upload.single('image'), (req, res) => {
  res.send('Image uploaded!');
});

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../HTML/admin.html'));
});

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../CSS/admin.css'));
});

module.exports = router;
