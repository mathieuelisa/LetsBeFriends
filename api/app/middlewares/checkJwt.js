const jwt = require('../services/jwt');

module.exports = (req, res, next) => {
    try {
        let authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.sendStatus(401);
        }
        const payload = jwt.validateToken(authHeader);
        next();
    } catch (error) {
        res.status(401).json('Invalid Token');
    }
}