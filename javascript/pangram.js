// Вам задана строка, состоящая из латинских букв, пробелов и знаков препинания.
// Строка называется панграммой, если она содержит каждую из 26 латинских
// букв хотя бы раз. Определите является ли строка панграммой.

const letters = 'qwertyuiopasdfghjklzxcvbnm';

function isPangram(text){
    const sawnLetters = new Set();

    for (const char of text.toLowerCase()){
        if (letters.includes(char)){
            sawnLetters.add(char);
        }
    }

    return sawnLetters.size === 26;
}

console.log(isPangram('A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once.')); // => false

console.log(isPangram('Waltz, bad nymph, for quick jigs vex.')); // => true