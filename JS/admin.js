const express = require('express');
const path = require('path');
const router = express.Router();

// Middleware to check admin status
function checkAdminStatus(req, res, next) {
  console.log('Checking Admin Status');
  const adminStatus = req.session.admin || false;
  res.locals.adminStatus = adminStatus;
  next();
}

// Route to retrieve admin status
router.get('/status', checkAdminStatus, function (req, res, next) {
  console.log('Admin Status Route Hit');
  res.json({ admin: res.locals.adminStatus });
});

// Route to render the admin.html template if authenticated
router.get('/admin', checkAdminStatus, function (req, res, next) {
  if (res.locals.adminStatus) {
    res.sendFile(path.join(__dirname, '../admin.html'));
  } else {
    res.status(401).send('Unauthorized access. Please login as admin.');
  }
});

module.exports = router;
