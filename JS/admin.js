const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '/lagoIMG')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/lagoIMG', upload.single('image'), (req, res) => {
  res.send('Image uploaded!');
});

module.exports = router;