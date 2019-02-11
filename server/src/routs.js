const AuthenticationController = require('./controllers/AuthenticationController.js');
const AuthenticationValidator = require('./middleware/AuthenticationValidator');
module.exports = (app) => {
    app.post('/register', AuthenticationValidator.register, AuthenticationController.register);
    app.post('/login', AuthenticationController.login);
}