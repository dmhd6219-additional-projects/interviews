// Необходимо проверить решение задачи по двум сервисам, вызвав checkResult(url1, solution), checkResult(url2, solution)
// checkResult: (url: string, solution: string | number) => Promise<boolean>;
/*
 * Если оба запроса вернули true - вывести success
 * Если хоть один вернул false - вывести fail
 * Если хоть один не ответил - вывести error
 * Если хоть один отвечает дольше 1 сек - вывести timeout
 */

async function checkResult(url, solution) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1500);
    });
}

async function checkTwoResults(promise1, promise2) {
    const timer = setTimeout(() => {
        throw new Error('timeout')
    }, 1000)

    return Promise.all([promise1, promise2])
        .then(([ans1, ans2]) => (ans1 && ans2 ? 'success' : 'fail'))
        .catch(() => {
            throw new Error('error')
        })
        .finally(() => clearTimeout(timer))
}

checkTwoResults(checkResult('1', 's1'), checkResult('2', 's2')).then((r) => console.log(r))