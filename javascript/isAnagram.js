/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function isAnagram(str1, str2) {
    const charMap = new Map();

    for (const char of str1) {
        charMap.set(char, ((charMap.get(char) || 0) + 1));
    }

    if (str1.length !== str2.length) return false;

    for (const char of str2) {
        if (!charMap.has(char)) return false;

        if (charMap.get(char) <= 0) return false;

        charMap.set(char, charMap.get(char) - 1);
    }

    return true;
}

console.log(isAnagram("anna", "nana"));
console.log(isAnagram("ab", "ac"));
