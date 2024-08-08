const axios = require('axios');

axios.get('https://dummyjson.com/http/200')
.then(response => {
    console.log('response', response);
    console.log('response.status', response.status);
    console.log('response.statusText', response.statusText);
    console.log('response.data', response.data);
})
.catch(error => {
    console.error('error', error);
})
;
