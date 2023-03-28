const { isEmpty } = require("../utils/util");

const authInterceptor = (req, res, next) => {
    console.log('');
    console.log('## authInterceptor');

    console.log('req.url =', req.url);

    try {
        // header
        const authorization = req.header('Authorization');
        console.log('  authorization =', authorization);

        if (isEmpty(authorization)) {
            throw 'auth-err';
        }

    } catch (err) {
        res.status(401).json({
            err: err,
            message: 'unauthorized user',
        });
        return;
    }

    console.log('HERE 11');
    next();

};

module.exports = authInterceptor;
