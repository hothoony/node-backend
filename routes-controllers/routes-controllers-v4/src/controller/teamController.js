
const getTeamList = function(req, res) {
    res.send('getTeamList');
};

const getTeamDetail = function(req, res) {
    res.send('getTeamDetail');
};

const addTeam = function(req, res) {
    res.send('addTeam');
};

const modifyTeam = function(req, res) {
    res.send('modifyTeam');
};

const deleteTeam = function(req, res) {
    res.send('deleteTeam');
};

module.exports = {
    getTeamList,
    getTeamDetail,
    addTeam,
    modifyTeam,
    deleteTeam,
}
