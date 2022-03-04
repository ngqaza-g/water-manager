const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Token = require('../models/Token');

const login = (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.find({username : username})
        .then(doc =>{
            const [ user ] = doc;
            bcrypt.compare(password, user.password)
            .then(isMatch =>{
                if(isMatch){
                    const expire = (1000 * 3600 * 24 * 7);
                    const token = crypto.randomBytes(64).toString('hex');

                    const newToken = new Token({
                        user_id : user._id,
                        token : token
                    });

                    newToken.save()
                        .then(()=>{
                            res.cookie('token', token, {
                                maxAge : expire
                            })
                            res.render('dashboard')
                        });
                }
            
            })
        }).catch(()=>{
            res.status(500).render('login');
        })
}

module.exports = login;