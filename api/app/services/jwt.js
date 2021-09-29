const JWT = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    makeToken: userId => {
        try {
            return JWT.sign(
                {
                    userId
                },
                process.env.JWT_SECRET,
                {
                    algorithm: 'HS256',
                    expiresIn: '30m'
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    validateToken: token => {
        try {
            return JWT.verify(
                token,
                process.env.JWT_SECRET,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log(error);
            return res.sendStatus(401);
        }
    }
}