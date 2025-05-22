// Вам задана строка, состоящая из латинских букв, пробелов и знаков препинания.
// Строка называется панграммой, если она содержит каждую из 26 латинских
// букв хотя бы раз. Определите является ли строка панграммой.
// Решение должно быть O(n)

function isPangram(text){
    const seen = new Set();

    for (const char of text.toLowerCase()){
        if (char >= 'a' && char <= 'z'){
            seen.add(char);
        }
        if (seen.size === 26) return true;
    }

    return false;
}

console.log(isPangram('A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once.')); // => false

console.log(isPangram('Waltz, bad nymph, for quick jigs vex.')); // => true