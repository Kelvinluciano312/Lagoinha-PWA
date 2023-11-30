// Import necessary modules and create an Express router
const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('./JS/db');

// Define routes for displaying and processing the login form
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './HTML/login.html'));
});

// Check admin credentials and set session on successful login
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check for specific admin credentials
  if (username === 'admin' && password === 'Lcc2023!') {
    // Successful login
    req.session.admin = true;
    res.redirect('/admin');
  } else {
    // Failed login
    res.status(401).send('Invalid credentials');
  }
});

// Export the router for use in other files
module.exports = router;
