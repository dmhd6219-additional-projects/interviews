/*
 * Требуется реализовать функцию spy которая умеет шпионить за другой функцией.
 */
function _sum(a, b) {
    return a + b
}

function spy(f) {
    function wrapper(...args) {
        const result = f(...args);
        wrapper.data.calls += 1;
        wrapper.data.args.push(args);
        wrapper.data.results.push(result);
        return result;
    }

    wrapper.data = {
        calls: 0,
        args: [],
        results: []
    };

    return wrapper;
}
const sum = spy(_sum)

console.log(sum(2, 2)) // 4
console.log(sum(21, 21)) // 42
/* количество вызовов функции _sum */
console.log(sum.data.calls) // 2
/* аргументы с которыми была вызвана функция _sum, с сохранением порядка вызовов */
console.log(sum.data.args) // [[2, 2], [21, 21]]
/* результаты, которые вернула функция _sum, с сохранением порядка вызовов */
console.log(sum.data.results) // [4, 42]