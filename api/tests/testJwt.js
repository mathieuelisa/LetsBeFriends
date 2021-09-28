const jwt = require('../app/services/jwt')
const checkJwt = require('../app/middlewares/checkJwt')

const token = jwt.makeToken({name : 'tonton'})
console.log(jwt.makeToken({name : 'tonton'}))
console.log(jwt.validateToken(token))