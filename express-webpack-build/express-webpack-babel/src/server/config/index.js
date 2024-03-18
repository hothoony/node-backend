const express = require('express');
// const mongoose = require('mongoose');
// const db = require('./keys').mongoURI
const createServer = require('./createServer');

// mongoose.connect(db).then(() => {
//     const app = createServer();
//     const port = process.env.PORT || 3000;
//     app.listen(port, () => {
//         console.log(`app is running on port ${port}`);
//     });
// })
// .catch((err) => {
//     console.log('could not start server');
//     console.log(err);
// });

const app = createServer();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
