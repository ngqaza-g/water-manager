const Token = require('../models/Token');

const logout = (req, res)=>{
    const { token } = req.cookies;
    
    if(token){
        Token.find({token: token})
            .then((doc)=>{
                if(doc.length !== 0){
                    Token.deleteOne({token: token})
                    .then(()=>{
                        res.clearCookie('token');
                        res.redirect('/login');
                    })
                }else{
                    res.status(401).redirect('/login');
                }
            })
    }else{
        res.status(401).res.redirect('/login');
    }
}

module.exports = logout;