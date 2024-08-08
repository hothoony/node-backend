const asyncFunc = (num) => {
    // throw new Error('error 11');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num == 1) {
                resolve('task is completed');
            } else if (num == 2) {
                reject('task is failed');
            } else {
                throw new Error('error 22');
            }
        }, 1000);
        // throw new Error('error 33');
    });
};

const asyncCall = async (num) => {
    try {
        const result = await asyncFunc(num)
        .then((value) => {
            console.log('then', value);
            return 'aa';
        })
        .catch((err) => {
            console.log('catch1', err);
            return 'bb';
        });
        console.log('result', result);
    } catch (err) {
        console.log('catch2', err);
    }
};

// asyncCall(1);
// asyncCall(2);
asyncCall(3);
