// Import the express-session module
const session = require('express-session');

// Define middleware for checking if the user is authenticated
const isAuthenticated = (req, res, next) => {
  // Check if the session contains the 'admin' property
  if (req.session && req.session.admin) {
    return next(); // User is authenticated, proceed to the next middleware
  }
  // Redirect to the login page if the user is not authenticated
  res.redirect('/login');
};

// Initialize session with provided configurations
const initializeSession = () => {
  return session({
    secret: 'initSession2023!', // Set a strong secret key for the session
    resave: false, // Do not save the session if it hasn't been modified
    saveUninitialized: true, // Save new sessions that haven't been modified
    cookie: {
      secure: false,
    },
  });
};

// Export middleware functions for use in other files
module.exports = { isAuthenticated, initializeSession };
