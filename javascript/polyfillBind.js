/**
 * Реализуй метод myBind, аналогичный встроенному bind:
 * привязывает контекст this и поддерживает частичное применение аргументов.
 *
 * @param {Object} context - Объект, который будет использован как this.
 * @param {...*} args - Аргументы, передаваемые при вызове.
 * @returns {Function} - Функция с привязанным контекстом и аргументами.
 */
Function.prototype.polyfillBind = function (context, ...args) {
    return (...rest) => {
        this.apply(context, [...args, ...rest]);
    }
};

function log(...props) {
    console.log(this.name, this.age, ...props);
}

const obj = { name: "Sviatoslav", age: 20 };

const logWithCtx = log.polyfillBind(obj, "dmhd6219", 6219);

logWithCtx("Hello!");