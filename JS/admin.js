const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const sharp = require('sharp'); // Add this line

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../lagoIMG'))
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname);
  }
});

const upload = multer({ storage: storage });

['logo', 'lagoHead', 'sideBar'].forEach(imagename => {
  router.post('/lagoIMG/' + imagename, upload.single(imagename), (req, res) => {
    sharp(req.file.path)
      .toFormat('png')
      .toFile(req.file.path + '.png', (err, info) => { // Add '.png' here
        if (err) throw err;
        res.redirect('/admin.html');
      });
  });
});

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../HTML/admin.html'));
});

// New route for sending the latest images
router.get('/latest-images', function(req, res) {
  // Send the latest images
  res.json({
    logo: '/logo.png',
    lagoHead: '/lagoHead.png',
    sideBar: '/sideBar.png'
  });
});

module.exports = router;
