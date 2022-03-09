// These modules are custom the User module handles storage of user information in the database.
// The Token module handles the storage of tokens in the database.
const User = require('../models/User');
const Token = require('../models/Token');

//This function validates the token stored in the user's browser as a cookie
function validate_token (req, res, next){

    // This extracts the cookie token from cookies sent by the browser.
    const { token } = req.cookies;


    if(token){ // This if statement checkes if the cookie is not empty
        
        // Token.find({token : token}) searches the database for a token with the same value.
        Token.find({token: token})
            // .then executes when the search was successfull i.e no error occured. 
            // Note even nothing was found it is considered successful.
            .then(doc =>{
                if(doc.length !== 0){
                    const [ tokenData ] = doc; // Token information is extracted from the array
                    const { user_id } = tokenData; // user_id is extracted from the token info
                    User.find({_id : user_id}) // Searches the users database for a user with the user_id
                        .then( doc =>{
                            if(doc.length !== 0){ // Checks if the array is noit empty 
                                // Set login variable to true
                                req.login = true;
                                next(); // Run the next function which is render_page().
                            }

                        })
                }else{
                    // User does not exist sets login variable to false
                    req.login = false;
                    next();                  
                }
            })
    }else{
        // Token does not exist in the database  sets the login variable to false
        req.login = false;
        next();
    }
}

module.exports = validate_token;