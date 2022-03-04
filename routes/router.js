const express = require('express');

// The below folders have been written by us (Custom modules)
const validate_token = require('../auth_modules/validate_token');
const login = require('../auth_modules/login');
const register = require('../auth_modules/register');
const logout = require('../auth_modules/logout');



// Router is an express module that handles routes or end points 
const router = express.Router();

router.get('/', validate_token);
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', [register, login]);

module.exports = router;