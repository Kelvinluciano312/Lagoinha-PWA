const Sequelize = require('sequelize');
const { User } = require('../db');

sequelize
  .sync()
  .then(() => {
    return User.create({ username: 'lagoinhaconnecticut@gmail.com', password: 'Lcc2023!' });
  })
  .then((user) => {
    console.log('User created successfully:', user);
    process.exit();
  })
  .catch((err) => {
    console.error('Error creating user:', err);
    process.exit(1);
  });
