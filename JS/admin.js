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
    // Use the original name from the route
    cb(null, req.params.imagename + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// Create separate routes for each image
['logo.png', 'lagoHead.png', 'sideBar.png'].forEach(imagename => {
  router.post('/lagoIMG/' + imagename, upload.single(imagename), (req, res) => {
    // After handling the upload, redirect back to the admin page
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