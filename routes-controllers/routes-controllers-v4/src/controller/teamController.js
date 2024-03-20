const teamService = require('../service/teamService');

const getTeamList = function(req, res) {
    teamService.getTeamList();
    res.send('getTeamList');
};

const getTeamDetail = function(req, res) {
    teamService.getTeamDetail();
    res.send('getTeamDetail');
};

const addTeam = function(req, res) {
    teamService.addTeam();
    res.send('addTeam');
};

const modifyTeam = function(req, res) {
    teamService.modifyTeam();
    res.send('modifyTeam');
};

const deleteTeam = function(req, res) {
    teamService.deleteTeam();
    res.send('deleteTeam');
};

module.exports = {
    getTeamList,
    getTeamDetail,
    addTeam,
    modifyTeam,
    deleteTeam,
}
