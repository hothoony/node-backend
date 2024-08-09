const axios = require('axios');

const axiosToken = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

// 요청 인터셉터
axiosToken.interceptors.request.use(
    function (config) {
        console.log('요청 인터셉터 config');
        const token = 'my-token';
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        console.log('요청 인터셉터 error');
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosToken.interceptors.response.use(
    function (response) {
        console.log('응답 인터셉터 response');
        return response;
    },
    function (error) {
        console.log('응답 인터셉터 error');
        return Promise.reject(error);
    }
);

axiosToken.get('/posts/1')
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