module.exports = function(app) {
  // Importing required modules
  const mongoose = require('mongoose');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const session = require('express-session');
  const MongoStore = require('connect-mongo')(session);

  // Connect to MongoDB
  mongoose.connect('mongodb+srv://dahvincis:Universoeh42@lagoct.2h5occ5.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

  // Use sessions for tracking logins
  app.use(session({
    secret: 'Lcc2023*', 
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection // Use mongoose.connection here
    })
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(User.authenticate())); // User is your user model
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
}
