/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        value: val,
        toBe: function (elem) {
            if (val === elem) return true;
            throw new Error("Not Equal")
        },
        notToBe: function (elem) {
            if (val !== elem) return true;
            throw new Error("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))