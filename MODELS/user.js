const { sequelize, Sequelize } = require('../JS/db.js');
console.log('sequelize:', sequelize); 
console.log('Sequelize:', Sequelize); 

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});

module.exports = User;
