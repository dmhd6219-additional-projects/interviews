function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const result = Array.from({ length: promises.length });
        let settled = 0;

        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];

            promise().then((r) => {
                result[i] = r;
                settled++;
                if (settled === promises.length) {
                    resolve(result);
                }
            }).catch(reject);
        }
    });
}

const p1 = () => Promise.resolve(1);
const p2 = () => Promise.resolve(2);

promiseAll([p1, p2]).then(console.log); // [1, 2]
