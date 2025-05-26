/**
 * Написать функцию, которая принимает массив чисел.
 * Необходимо определить монотонный он или нет.
 */

function isIncreasing(numbers){
    for (let i = 1; i < numbers.length; i++){
        const current = numbers[i];
        const prev = numbers[i - 1];
        if (current < prev) return false;
    }
    return true;
}

function isDecreasing(numbers){
    for (let i = 1; i < numbers.length; i++){
        const current = numbers[i];
        const prev = numbers[i - 1];
        if (current > prev) return false;
    }
    return true;
}

function isMonotonic(numbers) {
    return isIncreasing(numbers) || isDecreasing(numbers);
}


console.log(isMonotonic([1, 2, 3, 6])); // true
console.log(isMonotonic([6, 3, 3, 2, 1])); // true
console.log(isMonotonic([1, 1, 1])); // true
console.log(isMonotonic([1, 10, 6])); // false