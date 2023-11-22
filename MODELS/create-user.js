// Importing required modules
const mongoose = require('mongoose');
const User = require('../user.js'); // Path to your User model

// Connect to MongoDB
mongoose.connect('mongodb+srv://dahvincis:Universoeh42@lagoct.2h5occ5.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true});

// Create a new user
User.register(new User({ username: 'lagoinhaconnecticut@gmail.com' }), 'Lcc2023!', function(err, user) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('User created successfully');
});
