const axios = require('axios');

const getHttpStatus = (statusCode) => {
    axios.get('https://dummyjson.com/http/' + statusCode)
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
}

// ---- then 블럭
// getHttpStatus(200); // OK
// getHttpStatus(201); // Created
// getHttpStatus(204); // No Content
// ---- catch 블럭
// getHttpStatus(400); // Bad Request
// getHttpStatus(401); // Unauthorized
// getHttpStatus(403); // Forbidden
// getHttpStatus(404); // Not Found
// getHttpStatus(409); // Conflict
getHttpStatus(422); // Unprocessable Entity, Unprocessable Content
// getHttpStatus(500); // Internal Server Error
