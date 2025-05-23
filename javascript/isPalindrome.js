// палиндром за О(1) по памяти

function isPalindrome(str) {
    const isLetter = (char) => /[А-Яа-я]/.test(char)

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        while (left < right && !isLetter(str[left])) left++;
        while (left < right && !isLetter(str[right])) right--;

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome('А Роза упала на лапу Азора!'))