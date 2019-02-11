const jwt = require('jsonwebtoken');
const User = require('./../models/User');
const config = require('./../configs/jwt_config');
const bcrypt = require('bcryptjs');

function jwtSignUser(user) {
    const ONE_WEEK = 60*60*24*7;
    return jwt.sign(user, config.authentication.secretJwt, {
        expiresIn: ONE_WEEK
    })
};

function hashPassword(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    return hash;
};


module.exports = {
    async register(req, res) {
        let email = req.body.email.trim();
        let password = req.body.password;
        try {
            const user = new User({
                email,
                password: hashPassword(password)
            });
            await user.save();
            res.send(user);
        }catch(e){
            res.status(400).send(`Unable to create a user`)
        }
    },
    async login(req, res) {
        let email = req.body.email.trim();
        let password = req.body.password;
        try {
            let user = await User.findOne({'email': email});
            if(user) {
                const isRegistered = await bcrypt.compare(password, user.password);
                if(isRegistered) {
                    res.send({
                        user: user,
                        token: jwtSignUser(user.toObject())
                    })
                }else{
                    res.status(400).send(`${user.email}, please check out your password`)
                }
            }else{
                res.status(403).send(`Unable to find a user with email ${email}`)
            }
        } catch (e) {
            console.log(e);
            res.status(500).send(` Oops. An error has occured.`)
        }
    }
}