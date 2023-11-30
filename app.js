// Importing required modules
const express = require('express');
const path = require('path');
const app = express();

// Import routes
const lagoRoutes = require('./JS/lagoinha.js');
const adminRoutes = require('./JS/adminServer.js');

// Use routes
app.use(lagoRoutes);
app.use(adminRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));
app.use(express.static(path.join(__dirname, 'lagoIMG')));

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Error 404: Not Found');
});

// Start the server
app.listen(80, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Server started on port 80');
});
