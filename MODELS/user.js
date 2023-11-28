const Sequelize = require('sequelize');

const User = sequelize.define('User', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});
