/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    const fibs = [0, 1];
    yield 0;
    yield 1;
    while (true){
        yield fibs[0] + fibs[1];
        [fibs[0], fibs[1]] = [fibs[1], fibs[0] + fibs[1]]
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

const gen = fibGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)