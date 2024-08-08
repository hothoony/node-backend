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

// https://dummyjson.com/docs/http

// ---- then 블럭
// getHttpStatus(200); // OK
// getHttpStatus(201); // Created
// getHttpStatus(204); // No Content
// ---- catch 블럭
// getHttpStatus(301); // Moved Permanently
// getHttpStatus(307); // Temporary Redirect
// getHttpStatus(308); // Permanent Redirect
// getHttpStatus(400); // Bad Request
// getHttpStatus(401); // Unauthorized
// getHttpStatus(403); // Forbidden
// getHttpStatus(404); // Not Found
getHttpStatus(405); // Method Not Allowed
// getHttpStatus(408); // Request Timeout
// getHttpStatus(409); // Conflict
// getHttpStatus(422); // Unprocessable Entity, Unprocessable Content
// getHttpStatus(428); // Precondition Required
// getHttpStatus(429); // Too Many Requests
// getHttpStatus(500); // Internal Server Error
// getHttpStatus(501); // Not Implemented
// getHttpStatus(502); // Bad Gateway
// getHttpStatus(503); // Service Unavailable
// getHttpStatus(504); // Gateway Timeout
// getHttpStatus(507); // Insufficient Storage
