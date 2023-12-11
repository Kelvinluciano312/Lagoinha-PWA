const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// MySQL session store options, using the same credentials as in db.js
const options = {
  host: '34.23.84.32', // MySQL server host
  user: 'lagoinhact', // MySQL username
  password: 'Lcc2023!', // MySQL password
  database: 'lagoADM' // MySQL database name
};

// Initialize the MySQL session store
const sessionStore = new MySQLStore(options);

// Function to initialize session middleware with specific configurations
const initializeSession = () => {
  return session({
    secret: 'initSession2023!', // Secret key to sign the session ID cookie
    resave: false, // Avoid resaving sessions that haven't changed
    saveUninitialized: true, // Save uninitialized sessions
    store: sessionStore, // Use the MySQL session store
    cookie: {
      secure: true, // Set to true when deploying with HTTPS (false for HTTP)
      sameSite: 'None', // Cookie attribute to prevent CSRF attacks
    },
  });
};

// Middleware function to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next(); // If the user is authenticated, proceed to the next middleware
  }
  res.status(401).json({ error: 'Unauthorized' }); // If not authenticated, return an error
};

// Export the middleware functions for use in other files
module.exports = { isAuthenticated, initializeSession };