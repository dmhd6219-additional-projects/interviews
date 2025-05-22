/*
Переобразовать camelCase в snake_case
*/

const lower = 'qwertyuiopasdfghjklzxcvbnm';
const upper = lower.toUpperCase();

function fn(text) {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (lower.includes(char)){
            result += char;
        }

        if (upper.includes(char)){
            if (i > 0){
                result += '_';
            }
            result += char.toLowerCase();
        }
    }
    return result;
}

console.log(fn('myName')); // my_name
console.log(fn('YourName')); // your_name
console.log(fn('hellO')); // hell_o