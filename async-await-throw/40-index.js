const asyncFunc = (num) => {
    // throw new Error('error 11');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num == 1) {
                resolve('task is completed');
            } else if (num == 2) {
                reject('task is failed');
            } else {
                // throw new Error('error 22');
                reject('error 22');
                // reject(new Error('error 22'));
            }
        }, 1000);
        // throw new Error('error 33');
    });
};

// await 사용
const asyncCall1 = async (num) => {
    try {
        const result = await asyncFunc(num);
        console.log('result', result);
    } catch (err) {
        console.log('catch2', err);
    }
};

// await 미사용
const asyncCall2 = (num) => {
    try {
        const result = asyncFunc(num)
        .then((value) => {
            console.log('then', value);
            return 'aa';
        })
        // .catch((err) => {
        //     console.log('catch1', err);
        //     return 'bb';
        // })
        ;
        console.log('result', result);
    } catch (err) {
        console.log('catch2', err);
    }
};

// asyncCall1(3);
asyncCall2(3);
