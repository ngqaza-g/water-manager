const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    user_id : String,
    token : String,
});


const Token = mongoose.model('token', tokenSchema);

module.exports = Token;