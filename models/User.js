const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    username : String,
    password: String
});


const User = mongoose.model('user', userSchema);

module.exports = User;