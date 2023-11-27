// Importing required modules
const mongoose = require('mongoose');
const User = require('../user.js'); // Path to your User model

// Connect to MongoDB
mongoose.connect('mongodb+srv://dahvincis:Universoeh42@lagoct.2h5occ5.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true});

// Create a new user
const newUser = new User({ username: 'lagoinhaconnecticut@gmail.com' });
User.register(newUser, 'Lcc2023!', function(err, user) {
  if (err) {
    console.error('Error creating user:', err);
    return;
  }
  console.log('User created successfully:', user);
  process.exit(); // Terminate the script after creating the user
});
