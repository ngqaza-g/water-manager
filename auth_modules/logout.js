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
                        res.render('login');
                    })
                }else{
                    res.status(401).render('login');
                }
            })
    }else{
        res.status(401);
        res.render('login');
    }
}

module.exports = logout;