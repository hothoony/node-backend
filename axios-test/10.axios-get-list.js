const axios = require('axios');

axios.get('https://dummyjson.com/posts')
.then(response => {
    console.log('response -->>', response);
    console.log('response.status', response.status);
    console.log('response.statusText', response.statusText);
    console.log('response.data', response.data);

    console.log('response.data.total', response.data.total);
    console.log('response.data.posts', response.data.posts);
    response.data.posts.map((item) => {
        // console.log('item', item);
        console.log('item.id', item.id, item.title);
    });
})
.catch(error => {
    console.error('error -->>', error);
    console.error('error.response.status', error.response.status);
    console.error('error.response.statusText', error.response.statusText);
    console.error('error.message', error.message);
})
;

// https://dummyjson.com/docs