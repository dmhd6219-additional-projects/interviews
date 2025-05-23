/**

 Необходимо написать функцию, которая разделит каждую строку
 в массиве words * по символу separator.
 Необходимо вернуть массив получившихся после разделения строк,
 исключая пустые строки

 */


var splitWordsBySeparator = function (words, separator) {
    const ans = [];

    for (const word of words) {
        const newWords = word.split(separator);
        newWords.forEach((newWord) => {
            if (newWord.length > 0) {
                ans.push(newWord)
            }
        })
    }

    return ans;
};

var splitWordsBySeparatorWithReduce = function (words, separator) {
    return words.reduce((acc, word) => {
        acc.push(...word.split(separator).filter(x => x.length > 0))
        return acc;
    }, []);
};
console.log(splitWordsBySeparator([], "")) // []
console.log(splitWordsBySeparator([""], ".")) // []
console.log(splitWordsBySeparator(["abc"], ".")) // ["abc"]
console.log(splitWordsBySeparator(["abc", ""], ".")) // ["abc"]
console.log(splitWordsBySeparator(["a.b", "c.d"], ".")) // ["a", "b", "c", "d"]
console.log(splitWordsBySeparator(["a.b", ".c.d"], ".")) // ["a", "b", "c", "d"]

console.log(splitWordsBySeparatorWithReduce([], "")) // []
console.log(splitWordsBySeparatorWithReduce([""], ".")) // []
console.log(splitWordsBySeparatorWithReduce(["abc"], ".")) // ["abc"]
console.log(splitWordsBySeparatorWithReduce(["abc", ""], ".")) // ["abc"]
console.log(splitWordsBySeparatorWithReduce(["a.b", "c.d"], ".")) // ["a", "b", "c", "d"]
console.log(splitWordsBySeparatorWithReduce(["a.b", ".c.d"], ".")) // ["a", "b", "c", "d"]