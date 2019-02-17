const AuthenticationController = require('./controllers/AuthenticationController.js');
const AuthenticationValidator = require('./middleware/AuthenticationValidator');
const SongsController = require('./controllers/SongsController')
module.exports = (app) => {
    app.post('/register', AuthenticationValidator.register, AuthenticationController.register);
    app.post('/login', AuthenticationController.login);
    app.get('/songs', SongsController.sendSongs);
    app.post('/songs', SongsController.addSong);
    app.get('/songs/:id', SongsController.sendSong);
    app.patch('/song/:id', SongsController.updateSong);
}