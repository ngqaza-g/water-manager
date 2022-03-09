// This function runs after the validate_token function
// It checks if the login variable is true or false then it renders the dashboard or login page.

const render_page = (req, res)=>{
    if(!req.login){
        res.render('login');
    }else{
        res.render('dashboard');
    }    
}

module.exports = render_page;