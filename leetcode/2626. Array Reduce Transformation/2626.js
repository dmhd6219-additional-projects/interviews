/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    nums.forEach((elem) => {
        init = fn(init, elem);
    });
    return init;
};

// console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0))