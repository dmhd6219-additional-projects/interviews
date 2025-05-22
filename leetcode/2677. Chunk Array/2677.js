/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = []
    for (let i = 0; i < arr.length / size; i++) {
        const start = i * size;
        const end = start + size;
        res.push(arr.slice(start, end));
    }
    return res;
};

console.log(chunk([1,2,3,4,5], 1))
console.log(chunk([1,9,6,3,2], 3))