function groupBy (fn) {
    const result = {};

    for (let i = 0; i < this.length; i++) {
        const currentElement = this[i];
        const transformedCurrentElement = fn(currentElement);

        if (Object.hasOwn(result, transformedCurrentElement)) {
            result[transformedCurrentElement].push(currentElement)
        } else {
            result[transformedCurrentElement] = [currentElement]
        }
    }

    return result;
}

Array.groupBy = groupBy;

console.log([1, 4, 123, 44444, 88888, 12345].groupBy(
    x => x.toString().length,
));