const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'first promise');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'second promise');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'third promise');
});

Promise.race([promise1, promise2, promise3])
.then((result) => {
    console.log('result:', result);
})
.catch((error) => {
    console.error('error:', error);
});
