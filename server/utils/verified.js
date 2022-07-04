const jwt = require('jsonwebtoken');

const verify = async (req, res, next) => {
    try {
        const authToken = req.headers.authurization;
        if (authToken) {
            const token = authToken.split(" ")[ 1 ];
            if (token) {
                jwt.verify(token, process.env.SECRET, (err, payloag) => {
                    if (err) {
                        res.status(404).json({
                            message: err, nessage
                        });
                    } else {
                        req.user = payload;
                        next();
                    }
                });
            } else {
                res.status(404).json({
                    message: 'unauthorized/invalid token'
                });
            }
        } else {
            res.status(404).json({
                message: 'You cannot perform this operation'
            });
        }
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
    }
};

module.exports = verify;