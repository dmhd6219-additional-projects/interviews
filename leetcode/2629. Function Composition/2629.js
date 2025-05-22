/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        let value = x;
        for (const func of functions.reverse()){
            value = func(value);
        }
        return value;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4))