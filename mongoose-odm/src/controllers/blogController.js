const Blog = require('../models/blog');

// save
const save = (req, res) => {
    console.log('req', req);
    console.log('req.query', req.query);

    const blog = new Blog({
        title: req.query.title,
        content: req.query.content
    });

    blog.save()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.error(err);
        })
};

// find
const find = (req, res) => {
    Blog.find()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.error(err);
        });
};

// findById
const findById = (req, res) => {
    // Blog.findById(req.params.id)
    //     .then(result => {
    //         console.log(result);
    //         res.send(result);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    Blog.findOne({_id: req.params.id})
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.error(err);
        });
};

// update
const update = (req, res) => {
    // Blog.findByIdAndUpdate(req.params.id, { $set: { title: 'updated' } })
    //     .then(result => {
    //         console.log('update ok');
    //         res.send('update ok');
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         console.error('update error');
    //     });

    Blog.findOneAndUpdate({_id: req.params.id}, { $set: { title: 'updated2' } })
        .then(result => {
            console.log('update ok');
            res.send('update ok');
        })
        .catch(err => {
            console.error(err);
            console.error('update error');
        });
};

// delete
const deleteOne = async (req, res) => {
    // Blog.findByIdAndRemove(req.params.id)
    // .then(result => {
    //     console.log('delete ok');
    //     res.send('delete ok');
    // })
    // .catch(err => {
    //     console.error(err);
    //     console.error('delete error');
    // });

    Blog.findOneAndRemove({ _id: req.params.id })
        .then(result => {
            console.log('delete ok');
            res.send('delete ok');
        })
        .catch(err => {
            console.error(err);
            console.error('delete error');
        });
};

module.exports = {
    save,
    find,
    findById,
    update,
    deleteOne,
};