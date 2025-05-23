/**

 Реализуйте функцию, которая принимает на вход два объекта Promise
 с типом number и возвращает Promise с их суммой
 */

var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([value1, value2]) => value1 + value2)
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4