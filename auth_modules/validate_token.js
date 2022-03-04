const User = require('../models/User');
const Token = require('../models/Token');

const validate_token = (req, res, next)=>{
    // const cookies = req.cookies;
    // console.log(cookies);
    const { token } = req.cookies;

    if(token){
        Token.find({token: token})
            .then(doc =>{
                if(doc.length !== 0){
                    const [ tokenData ] = doc;
                    const { user_id } = tokenData;
                    User.find({_id : user_id})
                        .then( doc =>{
                            if(doc.length !== 0){
                                // const [ user ] = doc;
                                // const { name } = user;
                                res.render('dashboard');
                                next()
                            }

                        })
                }else{
                    res.render('login');
                }
            })
    }else{
        res.render('login');
    }
}

module.exports = validate_token;