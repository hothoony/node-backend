
const getMemberList = function(req, res) {
    res.send('/members');
};

const getMemberDetail = function(req, res) {
    res.send('/members/:memberId');
};

module.exports = {
    getMemberList,
    getMemberDetail
}
