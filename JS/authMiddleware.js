// Import the express-session module
const session = require('express-session');

// Define middleware for checking if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  res.redirect('/login');
};

// Initialize session with provided configurations
const initializeSession = () => {
  return session({
    secret: 'Lcc2023!',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  });
};

// Export middleware functions for use in other files
module.exports = { isAuthenticated, initializeSession };
