const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    date : String,
    tank: Number,
});


const Data = mongoose.model('data', dataSchema);

module.exports = Data;