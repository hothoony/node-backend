const app = require('./app');

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});
