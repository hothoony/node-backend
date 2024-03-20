
const getMemberList = function(req, res) {
    res.send('getMemberList');
};

const getMemberDetail = function(req, res) {
    res.send('getMemberDetail');
};

const addMember = function(req, res) {
    res.send('addMember');
};

const modifyMember = function(req, res) {
    res.send('modifyMember');
};

const deleteMember = function(req, res) {
    res.send('deleteMember');
};

module.exports = {
    getMemberList,
    getMemberDetail,
    addMember,
    modifyMember,
    deleteMember,
}
