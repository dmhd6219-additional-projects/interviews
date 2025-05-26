async function fetch() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1500);
    });
}

async function fetchWithTimeout(timeout) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Timeout exceeded'));
        }, timeout);

        fetch()
            .then((result) => {
                clearTimeout(timeoutId);
                resolve(result);
            })
            .catch((err) => {
                clearTimeout(timeoutId);
                reject(err);
            });
    });
}
