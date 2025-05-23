/**
 Реализуйте функцию, которая реализует объект счётчика
 с базовыми методами: increment, decrement, reset.
 Аргумент init устанавливает начальное значение счётчика.
 */

var createCounter = function (init) {
 return {
  value: init,

  increment: function () {
   return ++this.value;
  },

  decrement: function () {
   return --this.value;
  },

  reset: function () {
   this.value = init;
   return this.value;
  }
 };
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4