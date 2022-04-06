const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRouter = require('./routes/blogRoutes');
const blogRouter2 = require('./routes/blogRoutes2');

const app = express();

// const dbURI = 'mongodb://myuser:test1234@localhost:27017/mydb?retryWrites=true&w=majority';
// // const dbURI = 'mongodb://myuser:test1234@localhost:27071/mydb?retryWrites=true&w=majority';
// mongoose.connect(dbURI)
// // mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => {
//         console.log('connected to db!!', result);
//     })
//     .catch(err => {
//         console.error(err);
//     });

mongoose.connect('mongodb://myuser:test1234@localhost:27017/admin?retryWrites=true&w=majority', {
    dbName: 'mydb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(result => {
        console.log(result);
        console.log('connected to db');

        app.listen(3000, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('server is listening');
        });
    })
    .catch(err => {
        console.log('error occured');
        console.error(err)
    });


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(blogRouter);
app.use('/blogs', blogRouter2);

app.get('/', (req, res) => {
    res.redirect('/blogs');
});
