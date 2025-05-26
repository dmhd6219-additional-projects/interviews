/**
 * Необходимо написать функцию, которая на вход принимает объект
 * и убирает из него все falsy значения
 * * Falsy значение - это такое значение value, для которого Boolean(value) === false
 * * считаем, что obj - результат выполнения JSON.parse, то есть plain object
 */
function filterFalsy(obj) {
    if (Array.isArray(obj)) {
        return filterArray(obj);
    }
    if (typeof obj === 'object'){
        return filterObj(obj);
    }

    return obj;
}

function filterArray(arr) {
    return arr.filter(Boolean).map(filterFalsy);
}

function filterObj(obj) {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([_key, value]) => Boolean(value))
            .map(([key, value]) => [key, filterFalsy(value)])
    );
}


console.log(filterFalsy([null, 0, false, 1])); // -> [1]
console.log(filterFalsy({a: null, b: [false, 1]})); // -> {b: [1]}
console.log(filterFalsy([null, 0, 5, [0], [false, 15]])); // -> [5, [], [15]]