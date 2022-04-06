const get = (req, res) => {
    res.render('about', {title: 'about 페이지'});
};

module.exports = {
    get,
};
