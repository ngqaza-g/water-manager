const mqtt = require('mqtt');
const Data = require('../models/Data');
const moment = require("moment");

const client = mqtt.connect('mqtt://localhost');

client.on('connect', ()=>{
    client.subscribe('tank', (err)=>{
        if(!err){
            console.log("Subscribed");
        }
    });
});


client.on('message', (topic, message)=>{
    if(topic === 'tank'){
        const data = JSON.parse(message.toString());
        const newData = new Data({time : moment().format('LTS'), ...data});
        newData.save().then(()=>{
            console.log('Data Saved');
        }).catch(()=>{
            console.log("An Error Occured Saving Data");
        });
    }
})

module.exports = client;