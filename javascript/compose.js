/*
* Нужно написать функцию compose.
* Количество входящих функций в compose и число аргументов результирующей функции не ограничены.
*/
const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

function compose(...fns) {
    return (...args) => {
        let res = [...args];
        for (const fn of fns.reverse()){
            res = [fn(...res)]
        }
        return res[0];
    }
}
const r1 = compose(square, times2)(2);
const r2 = square(times2(2));
console.log(`r1: ${r1}, r2: ${r2}, equal=${r1 === r2}`);

const r3 = compose(square, times2, sum)(3, 4);
const r4 = square(times2(sum(3, 4)));
console.log(`r3: ${r3}, r4: ${r4}, equal=${r3 === r4}`);