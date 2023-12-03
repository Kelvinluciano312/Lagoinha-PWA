// Import necessary modules and create an Express router
const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../JS/db.js');
const bodyParser = require('body-parser');

// Check admin credentials and set session on successful login
router.post('/login', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  const { username, password } = req.body;

  // Check for admin credentials in the database
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (error, results, fields) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
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
});

// Export the router for use in other files
module.exports = router;
