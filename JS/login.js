// Import necessary modules and create an Express router
const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../JS/db.js');
const bodyParser = require('body-parser');

// Check admin credentials and set session on successful login
router.post('/login', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  const { username, password } = req.body;

  // Check for specific admin credentials
  if (username === 'admin' && password === 'Lcc2023!') {
    // Successful login
    console.log('Login successful');
    req.session.admin = true;
    res.redirect('../admin.html');
  } else {
    // Failed login
    console.log('Login failed');
    res.status(401).send('Invalid credentials');
  }
});

// Export the router for use in other files
module.exports = router;
