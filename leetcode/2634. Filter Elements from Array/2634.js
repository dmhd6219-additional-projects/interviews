/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const ans = [];
    arr.forEach((elem, index) => {
        if (fn(elem, index)){
            ans.push(elem);
        }
    })

    return ans;
};

// console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }))