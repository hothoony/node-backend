function asyncTask() {
    return new Promise((resolve) => {
        // 2초 후 완료
        setTimeout(() => {
            resolve('Task completed');
        }, 2000);
    });
}

function promiseWithTimeout(promise, timeout) {
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            setTimeout(() => reject(new Error('operation time out !!')), timeout)
        }),
    ]);
}

const run = async (timeout) => {
    try {
        const result = await promiseWithTimeout(asyncTask(), timeout);
        console.log('result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// run(1000); // timeout
run(3000); // ok
