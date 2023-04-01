const logInterceptor = (req, res, next) => {
    console.log('');
    console.log('## logInterceptor');

    next();
};

module.exports =logInterceptor;
