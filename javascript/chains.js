/*
Написать класс Car
Чтобы можно было записывать значения через цепочку
*/

class Car {
    constructor(name) {
        this.name = name;
        this._fields = {

        };
    }

    _accessor(field, value) {
        if (value !== undefined) {
            this._fields[field] = value;
            return this;
        }
        return this._fields[field] !== undefined
            ? this._fields[field]
            : `${field[0].toUpperCase() + field.slice(1)} is not defined`;
    }

    speed(value) {
        return this._accessor('speed', value);
    }

    color(value) {
        return this._accessor('color', value);
    }

    price(value) {
        return this._accessor('price', value);
    }
}


const bmw = new Car('bmw x5');
bmw.speed(150).color('white').price(1400);

console.log(bmw.speed()); // 150
console.log(bmw.color()); // white
console.log(bmw.price()); // 1400

const lada = new Car('lada 07');
console.log(lada.speed()); // Speed not set
console.log(lada.color()); // Color not set
console.log(lada.price()); // Price not set