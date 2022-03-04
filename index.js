// Express sets up an HTTP server. It handles the http requests (Get, Post, Put, Delete) 
const express = require('express');

// Mongoose handles the connecetion to Mongodb
const mongoose = require('mongoose');

// Cookie Parser helps express to handle cookies from the browser 
const cookieParser = require('cookie-parser');

// app is the variable that holds an express instance
const app = express();

// This is the port the server will listen for connections
const PORT = 7000;

// This Sets the view engine which renders the page                                                                                                                                                                                                                                                                                                                                                                                                      
app.set('view engine', 'ejs');
// This sets the directory for static files such as css and javascript
app.use(express.static('public'));

//This sets the cookie-parser 
app.use(cookieParser());

// 
app.use(express.urlencoded());
app.use('/', require('./routes/router'));


// Connecting to the database 
mongoose.connect('mongodb://localhost:27017/tatenda', {useNewUrlParser : true})
    .then(()=>{
        app.listen(PORT, ()=> console.log(`SERVER STARTED ON PORT ${PORT}`));
    })
    .catch((error)=>{
        console.log("FAILED TO START THE SERVER");
        console.error(error);
    })