
const getTeamList = function(req, res) {
    res.send('getTeamList');
};

const getTeamDetail = function(req, res) {
    res.send('getTeamDetail');
};

const addTeam = function(req, res) {
    res.send('addTeam');
};

const updateTeam = function(req, res) {
    res.send('updateTeam');
};

const deleteTeam = function(req, res) {
    res.send('deleteTeam');
};

module.exports = {
    getTeamList,
    getTeamDetail,
    addTeam,
    updateTeam,
    deleteTeam,
}
