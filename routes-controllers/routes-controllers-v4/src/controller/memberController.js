
const getMemberList = function(req, res) {
    res.send('getMemberList');
};

const getMemberDetail = function(req, res) {
    res.send('getMemberDetail');
};

const addMember = function(req, res) {
    res.send('addMember');
};

const updateMember = function(req, res) {
    res.send('updateMember');
};

const deleteMember = function(req, res) {
    res.send('deleteMember');
};

module.exports = {
    getMemberList,
    getMemberDetail,
    addMember,
    updateMember,
    deleteMember,
}
