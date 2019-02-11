const validator = require('validator');
module.exports = {
    register(req, res, next) {
        let email = req.body.email.trim();
        let password = req.body.password;
        if(!validator.isEmail(email)) {
            res.status(400).send(`The email is not valid ${email}`);
            res.end();
        }else if(!validator.isByteLength(req.body.password, {min: 6, max: 16})) {
            res.status(400).send(`The password: ${password} is not valid. Min length is 6 characters and max is 16.`)
            res.end();
        }else{
            next();
        }
    }
}