/*
Задание: Зашифруй гласные в строке.
Замените: a → 1, e → 2, i → 3, o → 4, u → 5.
Остальные символы не изменяются.

Пример:
coder("apple") → "1ppl2"
decoder("1ppl2") → "apple"
*/

const codeObj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
};

/**
 * Заменяет гласные на цифры.
 * @param {string} str - Входная строка.
 * @returns {string} - Закодированная строка.
 */
function coder(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += codeObj[str[i]] ?? str[i];
    }
    return res;

}

/**
 * Заменяет цифры обратно на гласные.
 * @param {string} str - Закодированная строка.
 * @returns {string} - Декодированная строка.
 */
function decoder(str) {
    const decodeObj = {}
    for (const [key, value] of Object.entries(codeObj)) {
        decodeObj[value] = key;
    }

    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += decodeObj[str[i]] ?? str[i];
    }
    return res;

}

console.log(coder("aiubdfg"))     // "135bdfg"
console.log(decoder("135bdfg"))   // "aiubdfg"
console.log(coder("apple"))       // "1ppl2"
console.log(decoder("1ppl2") )    // "apple"