// Importing required modules
const express = require('express');
const session = require('express-session'); // Import express-session
const app = express();
const path = require('path');

// Set up express-session middleware
app.use(session({
  secret: 'your-secret-key', // Replace with your own secret key
  resave: false,
  saveUninitialized: true
}));

// Import routes
// These are the routes that handle the requests to the server
const lagoRoutes = require('./JS/lagoinha.js');
const adminRoutes = require('./JS/admin.js');

// Use routes
// These middleware functions handle the requests to the specified routes
app.use(lagoRoutes); // Use the routes defined in lagoinha.js
app.use(adminRoutes); // Use the routes defined in admin.js

// Serve static files from the respective directories
// These middleware functions serve the static files (HTML, CSS, JS, images) to the client
app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));
app.use(express.static(path.join(__dirname, 'lagoIMG')));

// Handle 404 errors
// This middleware function handles any requests that don't match the above routes
app.use((req, res) => {
    res.status(404).send('Error 404: Not Found');
});

// Start the server on port 80
// This function starts the server and logs any errors or a successful start
app.listen(80, (err) => {
    if (err) {
      return console.error(err); // Log any errors
    }
    console.log('Server started on port 80'); // Log successful start
});
