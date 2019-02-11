module.exports = {
    authentication: {
        secretJwt: process.envJWT_secret || 'secret'
    }
}