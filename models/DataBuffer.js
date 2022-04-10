const mongoose = require('mongoose');

const dataBufferSchema = mongoose.Schema({
    time : String,
    waterLevel: Number,
    rate: Number
});


const DataBuffer = mongoose.model('data_buffer', dataBufferSchema);

module.exports = DataBuffer;