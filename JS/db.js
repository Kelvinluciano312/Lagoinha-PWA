const Sequelize = require('sequelize');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Session } = require('express-session');

// Declare sequelize instance
const sequelize = new Sequelize('lagoct', 'root', 'Universoeh42!', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define User model
const User = sequelize.define('User', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({
  db: sequelize,
});

module.exports = { sequelize, User, SequelizeStore }; // Export the sequelize instance, User model, and SequelizeStore
