const memberService = require('../service/memberService');

const getMemberList = function(req, res) {
    const userList = memberService.getMemberList();
    // if (true) {
    //     return res.status(400).json({message: 'bad request'});
    // }
    res.status(200).json('getMemberList');
};

const getMemberDetail = function(req, res) {
    const user = memberService.getMemberDetail();
    res.send('getMemberDetail');
};

const addMember = function(req, res) {
    memberService.addMember();
    res.send('addMember');
};

const modifyMember = function(req, res) {
    memberService.modifyMember();
    res.send('modifyMember');
};

const deleteMember = function(req, res) {
    memberService.deleteMember();
    res.send('deleteMember');
};

module.exports = {
    getMemberList,
    getMemberDetail,
    addMember,
    modifyMember,
    deleteMember,
}
