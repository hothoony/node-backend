
const findAll = (req, res) => {
    console.log('');
    console.log('## get members');

    // header
    const authorization = req.header('Authorization');
    console.log('  authorization =', authorization);

    // query string
    console.log('  query page =', req.query.page);
    console.log('  query size =', req.query.size);

    res.status(200).json({
        message: 'get members ok',
        parseParam: {
            header: req.header('Authorization'),
            page: req.query.page,
            size: req.query.size,
        },
    });
};

const saveMember = (req, res) => {
    console.log('');
    console.log('## post members');

    // Content-Type: application/json
    console.log('  req.body.name =', req.body.name);
    console.log('  req.body.age =', req.body.age);
    console.log('  req.body.gender =', req.body.gender);

    res.status(200).json({
        message: 'post members ok',
        parseParam: {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
        },
    });
};

const updateMember = (req, res) => {
    console.log('');
    console.log('## patch members');

    // path variable
    console.log('  req.params.id =', req.params.id);

    // form data
    // Content-Type: application/x-www-form-urlencoded
    console.log('  req.body.name =', req.body.name);
    console.log('  req.body.age =', req.body.age);

    res.status(200).json({
        message: 'patch members ok',
        parseParam: {
            id: req.params.id,
            name: req.body.name,
            age: req.body.age,
        },
    });
};

module.exports = {
    findAll,
    updateMember,
    saveMember,
};
