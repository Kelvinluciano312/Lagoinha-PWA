// Importing required modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Sequelize = require('sequelize');
const LocalStrategy = require('passport-local').Strategy;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const path = require('path');

// Connect to MySQL database
const sequelize = new Sequelize('lagoct', 'admin', 'Lcc2023!', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define User model
const User = sequelize.define('User', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

// Synchronize Sequelize models with the database
sequelize.sync()
  .then(() => {
    console.log('Sequelize models synchronized with the database');
  })
  .catch((err) => {
    console.error('Error synchronizing Sequelize models:', err);
  });

// Initialize SequelizeSession with express-session
const sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 24 * 60 * 60 * 1000,
});

// Use sessions for tracking logins
app.use(
  session({
    secret: 'Lcc2023!',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ where: { username: username } })
      .then((user) => {
        if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password' });
        }
        return done(null, user);
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

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
