// Importing required modules
const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const sharp = require('sharp');

// Configure Multer storage
// This is where the uploaded files will be stored
const storage = multer.diskStorage({
  // Setting the destination of the uploaded files
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../lagoIMG'))
  },
  // Setting the filename of the uploaded files
  filename: function(req, file, cb) {
    cb(null, file.fieldname);
  }
});

const upload = multer({ storage: storage });

// Creating routes for each image type
// These routes handle the POST requests when a file is uploaded
['logo', 'lagoHead', 'sideBar'].forEach(imagename => {
  router.post('/lagoIMG/' + imagename, upload.single(imagename), (req, res, next) => {
    // Check if file is provided
    if (!req.file) {
      res.status(400);
      res.send('<html><head><meta http-equiv="refresh" content="3;url=/admin.html" /></head><body>No file uploaded. Redirecting...</body></html>');
      return;
    }
    // Convert the uploaded file to png format
    sharp(req.file.path)
      .toFormat('png')
      .toFile(req.file.path + '.png', (err, info) => { // Add '.png' here
        if (err) {
          console.error(err);
          return res.status(500).send('Server error');
        }
        // Redirect to the admin page after successful upload
        res.redirect('../admin.html');
      });
  });
});

// Route for serving the admin page
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../HTML/admin.html'), function(err) {
    if (err) {
      console.error(err);
      next(err);
    }
  });
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
