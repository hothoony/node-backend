const content = (() => {
    let str = '';
    str += '<a href="/">/</a><br>';
    str += '<a href="/members">/members</a><br>';
    str += '<a href="/members/create">/members/create</a><br>';
    str += '<a href="/members/123">/members/id</a><br>';
    str += '<a href="/members/123/update">/members/id/update</a><br>';
    str += '<a href="/members/123/delete">/members/id/delete</a><br>';
    return str;
})();

const getMembers = (req, res) => {
    res.write('<h1>member list</h1>');
    res.write(content);
    res.end();
};

const createMember = (req, res) => {
    res.write('<h1>member create form</h1>');
    res.write(content);
    res.end();
};

const getMember = (req, res) => {
    res.write(`<h1>get member id ${req.params.id}</h1>`);
    res.write(content);
    res.end();
};

const updateMember = (req, res) => {
    res.write(`<h1>update member id ${req.params.id}</h1>`);
    res.write(content);
    res.end();
};

const deleteMember = (req, res) => {
    res.write(`<h1>delete member id ${req.params.id}</h1>`);
    res.write(content);
    res.end();
};

module.exports = {
    getMembers,
    createMember,
    getMember,
    updateMember,
    deleteMember,
};
