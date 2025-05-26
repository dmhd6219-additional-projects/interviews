/**
 * Дана строка, содержащая буквы //A-Z//:
 * "AAAABBCCCXY2DDDDEEEFFFFAAAABBBBBBBBBBBBBBBBBBBB"
 * Нужно написать функцию RLE, которая выведет строку вида:
 * "A4B3C2XYD4E3F3A6B28"
 *
 * Примечания:
 * 1. Если символ встречается один раз, он остается неизменным
 * 2. Если символ встречается более одного раза, к нему добавляется число повторений
 */

function rle(str) {
    let map = new Map();
    let index = 0;
    let prev = str[0];
    let count = 0;
    for (const char of str){
        if (char !== prev){
            map.set(index, [prev, count]);
            prev = char;
            count = 1;
            index++;
        }
        else {
            count++;
        }
    }
    map.set(index, [prev, count]);
    return Array.from(map.values()).reduce((acc, [char, amount]) => {
        return acc + char + (amount > 1 ? amount : '');
    }, '');
}

console.log(rle('A')) // A
console.log(rle('AAAB')) // A3B
console.log(rle('ABCCC')) // ABC3