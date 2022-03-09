const express = require('express');

// The below folders have been written by us (Custom modules)
// They handle authentication
const validate_token = require('../auth_modules/validate_token');
const login = require('../auth_modules/login');
const register = require('../auth_modules/register');
const logout = require('../auth_modules/logout');
const render_page = require('../auth_modules/render_page');



// Router is an express module that handles routes or end points 
const router = express.Router();

// This is the default route  
router.get('/', validate_token, render_page);

// This is the route for login
router.get('/login', validate_token, render_page);

// This is the route for the dashboard 
router.get('/dashboard', validate_token, render_page);

// This is the register route 
router.get('/register', validate_token, (req, res)=>{
    if(!req.login){
        res.render('/register');
    }else{
        res.render('dashboard');
    }
});

// These routes are for handling post request from the client
// These are login logout and register 
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', [register, login]);


module.exports = router;