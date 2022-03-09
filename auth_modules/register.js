const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = (req, res, next)=>{
    const { name, username, password} = req.body;

    User.find({username : username})
        .then(doc =>{
            if(doc.length === 0){
                bcrypt.hash(password, 10).then(hashedPassword =>{
                    const newUser = new User({
                        name : name,
                        username : username,
                        password : hashedPassword
                    })

                    newUser.save()
                        .then(()=>{
                            next()
                        })
                        .catch(()=>{
                            res.status(500).redirect('/register');
                        })
                })
            }
        })
}

module.exports = register;