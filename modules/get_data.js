const Data = require('../models/Data');

const get_data = (req, res)=>{
    const rate_value = Math.floor(Math.random() * 100);
    let tank_value;
    Data.find().then(doc=>{
        tank_value = doc[doc.length-1].tank;
        console.log(tank_value);
        res.json({rate_value, tank_value});
    })
}

module.exports = get_data;