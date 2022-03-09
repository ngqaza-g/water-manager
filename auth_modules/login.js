// The crypto module is used to generate random strings of data which are used as login tokens.
const crypto = require('crypto');

// The bcrypt module is used to encrypt the password.
const bcrypt = require('bcryptjs');

// These modules are custom the User module handles storage of user information in the database.
// The Token module handles the storage of tokens in the database.
const User = require('../models/User');
const Token = require('../models/Token');

// This function handles the login logic.
// req and res parameters handle information concerning the request and response of the request.
function login (req, res){

    // These variables store the username and password from the login form.
    const username = req.body.username;
    const password = req.body.password;

    // User.find({username : username}) searches the database to find a user with username maching one put in the login form.
    User.find({username : username})
        // .then executes when the search was successfull i.e no error occured. 
        // Note even nothing was found it is considered successful.
        .then(doc =>{ // doc is the array of the results found.
            if(doc.length !== 0){ // Checking if the returned array is not empty.
                const [ user ] = doc; // Extracting user information from the database.
                bcrypt.compare(password, user.password) // Comparing the password one from the database and one put by the user in the login form.
                .then(isMatch =>{
                    if(isMatch){ // Check if the passwords match if they match proceed to generate login token
                        const expire = (1000 * 3600 * 24 * 7); // This is the expirey date of the cookie.
                        const token = crypto.randomBytes(64).toString('hex'); // This line generates 64bits long random string which will be used as a token.

                        // This block generates how the token will be stored in the database.
                        const newToken = new Token({
                            user_id : user._id,
                            token : token
                        });

                        // This block saves the token in the database 
                        newToken.save()
                            .then(()=>{
                                // Once the token is saved a cookie is generated and sent to the client (browser).
                                res.cookie('token', token, {
                                    maxAge : expire
                                });

                                // This redirects the user to the dashboard. 
                                res.redirect('/dashboard');
                            });
                    }else{
                        // In this else state ment the password pass will be wrong so it redirects the user to the login page
                        res.status(401).redirect('/login');
                    }
                
                });
            }else{
                // In this array the username passed does not exist in the database.
                res.status(401).redirect('/login');
            }
        }).catch(()=>{
            // This catch statement runs when an error occures while searching the database.
            res.status(500).redirect('/login');
        })
}

module.exports = login; // This exports the login funtion to be accessed by other parts of the application