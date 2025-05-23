/**

 Реализуйте функцию, возвращающую мемоизированную версию функции fn.
 Мемоизированная функция никогда не будет вызвана дважды для одной и
 той же комбинации входных аргументов - она вернет значение из кеша. */


function memoize(fn) {
    const map = new Map();
    return function (...args) {
        const argsKey = JSON.stringify(args.slice(0, fn.length))
        if (map.has(argsKey)){
            return map.get(argsKey);
        }

        const res = fn(...args);
        map.set(argsKey, res);
        return res;
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1