// Import necessary modules and create an Express router
const express = require('express');
const path = require('path');
const router = express.Router();

// Define route for admin dashboard, checking for admin session
router.get('/', function (req, res, next) {
  if (req.session.admin) {
    res.sendFile(path.join(__dirname, './HTML/admin.html'));
  } else {
    res.status(401).send('Unauthorized access. Please login as admin.');
  }
});

// Define route for retrieving latest images
router.get('/latest-images', function (req, res) {
  res.json({
    logo: '/logo.png',
    lagoHead: '/lagoHead.png',
    sideBar: '/sideBar.png',
  });
});

// Export the router for use in other files
module.exports = router;
