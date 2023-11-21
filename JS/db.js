const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true});

// Importing required modules
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Use sessions for tracking logins
app.use(session({
  secret: 'Lcc2023!', 
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
