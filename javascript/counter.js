/**
 Реализуйте функцию, которая реализует объект счётчика
 с базовыми методами: increment, decrement, reset.
 Аргумент init устанавливает начальное значение счётчика.
 */

var createCounter = function (init) {
    return {
        init: init,
        value: init,

        increment: function () {
            return ++this.value;
        },

        decrement: function () {
            return --this.value;
        },

        reset: function () {
            this.value = this.init;
            return this.value;
        }
    };
};

var createCounterWithClosure = function (init) {
    let currentValue = init;
    return {
        increment: function () {
            return ++currentValue;
        },

        decrement: function () {
            return --currentValue;
        },

        reset: function () {
            currentValue = init;
            return currentValue;
        }
    };
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

const counterWithClosure = createCounterWithClosure(5)
console.log(counterWithClosure.increment()); // 6
console.log(counterWithClosure.reset()); // 5
console.log(counterWithClosure.decrement()); // 4