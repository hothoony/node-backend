const bcrypt = require('bcrypt');

const saltRounds = 10;
const plainPassword1 = 'myPassword123$';
const plainPassword2 = 'myPassword123^';

console.log('plainPassword1', plainPassword1);
console.log('plainPassword2', plainPassword2);

let hashPassword;

bcrypt.hash(plainPassword1, saltRounds, function(err, hash) {
    // console.log('err', err);
    console.log('plainPassword1 hash ', hash);
    hashPassword = hash;

    console.log('hashPassword', hashPassword);

    bcrypt.compare(plainPassword1, hashPassword, function(err, result) {
        console.log('hashPassword matches plainPassword1', result);
    });

    bcrypt.compare(plainPassword2, hashPassword, function(err, result) {
        console.log('hashPassword matches plainPassword2', result);
    });
});
