// Importing required modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

const app = express();
const path = require('path');

// Set up express-session middleware
const store = MongoStore.create({
  mongoUrl: 'mongodb+srv://dahvincis:Universoeh42@lagoct.2h5occ5.mongodb.net/?retryWrites=true&w=majority', // Replace with your MongoDB connection string
  mongooseConnection: mongoose.connection
});

app.use(session({
  secret: 'Lcc2023!',
  resave: false,
  saveUninitialized: true,
  store: store
}));

app.use(passport.initialize());
app.use(passport.session());

// Import routes
const lagoRoutes = require('./JS/lagoinha.js');
const adminRoutes = require('./JS/admin.js');

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