
const findAllTeams = (req, res) => {
    console.log('');
    console.log('## findAllTeams');

    res.send({
        message: 'findAllTeams OK',
        status: 200,
    });
}

module.exports = {
    findAll: findAllTeams,
};
