const axios = require('axios');

axios.get('https://dummyjson.com/posts/1')
.then(response => {
    console.log('response -->>', response);
    console.log('response.status', response.status);
    console.log('response.statusText', response.statusText);
    console.log('response.data', response.data);
})
.catch(error => {
    console.error('error -->>', error);
    console.error('error.response.status', error.response.status);
    console.error('error.response.statusText', error.response.statusText);
    console.error('error.message', error.message);
})
;

// https://dummyjson.com/docs