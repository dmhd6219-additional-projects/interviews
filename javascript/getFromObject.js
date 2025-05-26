/**
 * Нужно написать функцию get.
 * На вход функция принимает объект и путь до поля объекта.
 * Путь - это строка, разделенная точкой.
 * Функция должна вернуть соответствующее поле объекта.
 * Запрашиваемого поля в объекте может не быть.
 */
function get(obj, path) {
    let result = {...obj};
    for (const part of path.split('.')){
        if (result[part]){
            result = result[part];
        }
        else {
            return undefined;
        }
    }
    return result;
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};

console.log(get(obj, 'a.b')); // { c: 'd' }
console.log(get(obj, 'a.b.x')); // undefined