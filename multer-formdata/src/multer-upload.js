const multer = require('multer');
const path = require('path');
const fs = require('fs');

const yyyymmddToday = function() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
}
const yyyymmdd = function() {
    const yyyymmdd = yyyymmddToday();
    return yyyymmdd;
}
const yyyymm = function() {
    const yyyymmdd = yyyymmddToday();
    return yyyymmdd.substring(0, 6);
}
const yyyy = function() {
    const yyyymmdd = yyyymmddToday();
    return yyyymmdd.substring(0, 4);
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // const uploadPath = path.resolve(process.env.HOME, 'ztemp/uploads'); // /Users/ingpdev/ztemp/uploads
        const uploadPath = '/Volumes/mydata/ztemp/uploads';
        const targetDir = `${yyyy()}/${yyyymm()}/${yyyymmdd()}`;
        const dirPath = uploadPath + '/' + targetDir;
        fs.mkdirSync(path.resolve(uploadPath, targetDir), {recursive: true});
        cb(null, dirPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
