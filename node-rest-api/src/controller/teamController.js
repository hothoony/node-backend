const findAll = (req, res) => {
    
    res.send({
        status: 200,
        message: 'OK',
    });
}

module.exports = {
    findAll,
};
