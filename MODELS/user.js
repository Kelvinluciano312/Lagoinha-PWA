// Importing required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Define User schema
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true }, // Username field
});

// Add passportLocalMongoose plugin to User schema
UserSchema.plugin(passportLocalMongoose);

// Export User model
module.exports = mongoose.model('User', UserSchema);
