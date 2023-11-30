// Import necessary modules and initialize the Express app
const express = require('express');
const path = require('path');
const app = express();

// Import routes for different parts of the application
const lagoRoutes = require('./JS/lagoinha.js');
const adminRoutes = require('./JS/adminServer.js');

// Set up session middleware for user authentication
const session = require('./JS/authMiddleware').initializeSession();

// Use routes for various parts of the application
app.use(lagoRoutes);
app.use(adminRoutes);
app.use(session);

// Apply authentication middleware for admin routes
const { isAuthenticated } = require('./JS/authMiddleware');
app.use('/admin', isAuthenticated);

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));
app.use(express.static(path.join(__dirname, 'lagoIMG')));

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Error 404: Not Found');
});

// Start the server on port 80
app.listen(80, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Server started on port 80');
});
