/**

 Необходимо написать функцию, возвращающую максимальное числовое значение
 для строк из массива strs.
 При этом, числовое значение для строки определяется следующим образом:
 Если строка состоит только из цифр, то числовое значение - это
 результат преобразования строки в число
 В ином случае числовое значение - это длина строки
 */

var maxValue = function (strs) {
    const isNumber = (str) => /^\d+$/.test(str);

    let max = 0;
    for (const str of strs) {
        max = Math.max(max, isNumber(str) ? Number(str) : str.length);
    }
    return max;
};

console.log(maxValue(["alic3", "bob", "3", "4", "00000"])); // 5
console.log(maxValue(["1", "01", "001", "0001"])); // 1
console.log(maxValue([])); // 0