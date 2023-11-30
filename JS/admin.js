// Import necessary modules and create an Express router
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res, next) {
  // Check if the user is authenticated
  const adminStatus = req.session.admin || false;

  if (adminStatus) {
    // Render the admin.html template if authenticated
    res.sendFile(path.join(__dirname, './HTML/admin.html'));
  } else {
    // Redirect to login if not authenticated
    res.status(401).send('Unauthorized access. Please login as admin.');
  }
});

router.get('/latest-images', function (req, res) {
  // Return JSON data for the latest images
  res.json({
    logo: '/logo.png',
    lagoHead: '/lagoHead.png',
    sideBar: '/sideBar.png',
  });
});

// Export the router for use in other files
module.exports = router;
