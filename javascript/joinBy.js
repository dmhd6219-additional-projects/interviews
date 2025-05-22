/*
Написать функцию для объединения символов,
(дополнительно !НЕ использовать ...args, получить аргументы другим способом)
*/

function joinBy(){
    if (arguments.length === 1) return ''
    if (arguments.length === 2) return arguments[1]

    return Array.from(arguments).slice(1).join(arguments[0])
}

console.log(joinBy('_', 'a', 'b', 'c', 'd', 'e')); // 'a_b_c_d_e'
console.log(joinBy('_', 'a', 'b', 'c')); // 'a_b_c'