// Import necessary modules and initialize the Express app
const express = require('express');
const path = require('path');
const sessionMiddleware = require('./JS/authMiddleware'); // Changed the import to match your file
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));
app.use(express.static(path.join(__dirname, 'lagoIMG')));

// Use the session middleware for user authentication
app.use(sessionMiddleware.initializeSession({
  cookie: {
    sameSite: 'None',
    secure: true,
  },
})); // Use the session middleware

// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes for different parts of the application
const lagoRoutes = require('./JS/lagoinha.js');
const adminRoutes = require('./JS/admin.js');
const loginRoutes = require('./JS/login.js');

// Use the defined routes
app.use(lagoRoutes);

// Apply authentication middleware for admin routes
const { isAuthenticated } = require('./JS/authMiddleware');
app.use('/admin/status', isAuthenticated);

app.use(adminRoutes);
app.use(loginRoutes);

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
