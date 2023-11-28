const Sequelize = require('sequelize');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { SequelizeSession } = require('connect-session-sequelize');

// Declare sequelize instance
const sequelize = new Sequelize('lagoct', 'lagoinhaconnecticut@gmail.com', 'Lcc2023!', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define User model
const User = sequelize.define('User', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

const SequelizeStore = new SequelizeSession(session.Store);

module.exports = { sequelize, User, SequelizeStore }; // Export the sequelize instance, User model, and SequelizeStore
