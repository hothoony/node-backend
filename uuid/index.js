const { v4: uuidv4, v5: uuidv5 } = require('uuid');

for (let i = 0; i < 10; i++) {
    console.log('uuidv4', uuidv4());
}
