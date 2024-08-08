const asyncFunc = (num) => {
    // throw new Error('error 11');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num == 1) {
                resolve('task is completed');
            } else if (num == 2) {
                reject('task is failed');
            } else {
                // Promise 내부에서는
                // throw new Error() 대신에
                // reject(new Error()) 를 사용한다

                // throw new Error('error 22');
                reject(new Error('error 22')); // throw 대신 reject 사용
            }
        }, 1000);
        throw new Error('error 33');
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
