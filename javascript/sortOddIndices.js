function sortOddIndices(arr) {
    const oddElements = arr
        .filter((_, index) => index % 2 === 1)
        .sort((a, b) => a - b);

    for (let i = 0, j = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            arr[i] = oddElements[j++];
        }
    }
}

const arr = [10, 3, 5, 2, 8, 9, 1, 7];
sortOddIndices(arr);
console.log(arr); // [10, 2, 5, 3, 8, 7, 1, 9] → [10, 2, 5, 3, 8, 7, 1, 9]
