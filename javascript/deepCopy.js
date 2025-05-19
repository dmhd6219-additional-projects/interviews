/**
 * Создает глубокую копию объекта или возвращает примитивное значение без изменений.
 * @param {any} src - Исходный объект или значение для копирования.
 * @returns {any} - Глубокая копия объекта или исходное примитивное значение.
 */

/**
 * Создает глубокую копию объекта или возвращает примитивное значение без изменений.
 * @param {any} src - Исходный объект или значение для копирования.
 * @returns {any} - Глубокая копия объекта или исходное примитивное значение.
 */
function deepCopy(src) {
    if (src === null || typeof src !== "object") return src;

    if (Array.isArray(src)) {
        return src.map(item => deepCopy(item));
    }

    return Object.keys(src).reduce((accumulator, key) => {
        accumulator[key] = deepCopy(src[key]);
        return accumulator;
    }, {})
}

const original = {
    name: "Sviatoslav",
    age: 20,
    friend: {
        name: "Zhenya",
        age: 20,
        friendly: true
    },
    friends: [
        {
            name: "Zhenya",
            age: 20,
            friendly: true
        },
        {
            name: "Polina",
            age: 20,
            friendly: false
        },
    ]
};

const copied = deepCopy(original);
copied.friend.friendly = false;

console.log(copied.friend.friendly === false); // true
console.log(original.friend.friendly === true); // true

console.log(deepCopy(42) === 42); // true
console.log(deepCopy(null) === null); // true
