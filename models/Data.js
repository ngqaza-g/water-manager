const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    date : String,
    waterLevel: Number,
    rate: Number
});


const Data = mongoose.model('data', dataSchema);

module.exports = Data;